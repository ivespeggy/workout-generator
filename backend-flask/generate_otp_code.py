import pyotp

class OTPGenerator:
    def __init__(self) -> None:
        self.totp = pyotp.TOTP(pyotp.random_base32())
    def generate_code(self) ->str:
        otp_code = self.totp.now()
        return otp_code
    