import redis
import os
from config import REDIS_SERVER_PORT
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
    


    
    