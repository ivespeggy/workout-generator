import redis
from config import REDIS_SERVER_PORT

class RedisServer:
    def __init__(self) -> None:
        self.r = redis.Redis(host = 'localhost', port = REDIS_SERVER_PORT, db = 0)
    
    def store_otp(self,user_email, otp_code,ttl = 30):
        # ttl : 30 mins
        key = f"otp:{user_email}"
        self.r.psetex(key, ttl * 60 * 1000, otp_code)

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
            # 1 means added
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
    


    
    