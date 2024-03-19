import redis
from config import REDIS_SERVER_PORT

class RedisServer:
    def __init__(self) -> None:
        self.r = redis.Redis(host = 'localhost', port = REDIS_SERVER_PORT, db = 0)
    
    def store_otp(self,user_id, otp_code,ttl = 300):
        self.r.psetex(user_id, ttl, otp_code)

    def retrieve_otp(self, user_id)-> dict:
        res = {}
        otp_code = self.r.get(user_id)
        if otp_code:
            res['status'] = True
            res['data'] = otp_code.decode('utf-8')
        else:
            res['status'] = False
            res['data'] = "NOT FOUND"
        return res
    


    
    