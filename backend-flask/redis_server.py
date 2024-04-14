import redis
import os
from config import REDIS_SERVER_PORT
import jwt
redis_host = os.getenv('REDIS_HOST','localhost')

class RedisServer:
    def __init__(self) -> None:
        self.r = redis.Redis(host = redis_host, port = REDIS_SERVER_PORT, db = 0)
    # This function will take email and otp code as input
    # where key is email and val is otp code.
    # ttl for the otp code is 30 mins
    def store_otp(self,user_email, otp_code,ttl = 30):
        # ttl : 30 mins
        key = f"otp:{user_email}"
        self.r.psetex(key, ttl * 60 * 1000, otp_code)
    
    def list_all_user(self, top_number: int)-> None:
        _, keys = self.r.scan(0,match="register*",count=top_number)
        decoded_key_email = []
        for key in keys:
            decoded_key_email.append(key.decode('utf-8')[9:])

        print(decoded_key_email)

    def retrieve_user_info(self, user_email) -> dict:
        res = {}
        key = f"register:{user_email}"
        retrieved_user = self.r.get(key)
        if retrieved_user is not None:
            self.r.set(key, 2) # login success
            res['status'] = True
            res['message'] = 'logged in successfully'
            res['response_status_code'] = 200
        else:
            res['status'] = False
            res['message'] = "User Not Found"
            res['response_status_code'] = 404
        return res
    
    def retrieve_jwt(self, user_email:str) -> dict:
        key = f'jwt:email:{user_email}'
        res = {}
        jwt_token = self.r.get(key)
        if jwt_token:
            res['status'] = True
            res['message'] = 'Token found'
            res['response_status_code'] = 302
        else:
            res['status'] = False
            res['message'] = 'Token Not Found'
            res['response_status_code'] = 404
        return res
            



    def generate_jwt(self,user_email:str) -> dict:
        # firstly to check if user exist in the db
        check_if_exist = self.retrieve_user_info(user_email=user_email)
        res = {}
        if check_if_exist['status']:
            key = f'jwt:email:{user_email}'
            encoded_jwt = jwt.encode({"email":user_email }, "secret", algorithm="HS256")
            print("User found")
            #firstly to check if we have jwt token associated with this email.abs
            token_exist = self.r.get(key)
            if not token_exist:
                # if not exist, create jwt token.
                encoded_jwt = jwt.encode({"email":user_email }, "secret", algorithm="HS256")
                #
                key = f'jwt:email:{user_email}'
                # ttl is 7 days
                self.r.psetex(key, 7 * 24 * 60 * 60 * 100, encoded_jwt)
                res['status'] = True
                res['message'] = 'Token generated, and logged in'
                res['response_status_code'] = 201
                res['token'] = encoded_jwt
            if token_exist:
                res['status'] = True
                res['message'] = f'Token existed, ttl is {self.r.ttl(key)} seconds'
                res['response_status_code'] = 200
                res['token'] = encoded_jwt


        else:
            print("User NOT found")
            res['status'] = False
            res['message'] = 'Not Found'
            res['response_status_code'] = 404
            print("2")
        return res



    def register_user(self, user_email) -> dict:
        res = {}
        key = f"register:{user_email}"
        print("register_key is "+key)
        register_status = self.r.get(key)
        if register_status is not None:
            res['status'] = False
            res['message'] = "Already existed in the database"
            res['response_status_code'] = 409 # conflict
        else:
            # does not exist in redis
            # 1 means registered
            self.r.set(key,1)
            res['status'] = True # successfully added
            res['message'] = "Registered"
            res['response_status_code'] = 200
        return res



    def retrieve_otp(self, user_email)-> dict:

        res = {}
        otp_code = self.r.get(f"otp:{user_email}")
        if otp_code:
            res['status'] = True
            res['data'] = otp_code.decode('utf-8')
        else:
            res['status'] = False
            res['data'] = "NOT FOUND"
        return res
    


    
    