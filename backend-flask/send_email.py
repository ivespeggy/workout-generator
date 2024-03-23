import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class EmailSender:
    def __init__(self, sender_email, sender_password, smtp_server = "smtp.gmail.com", port = 587) -> None:
        self.sender_email = sender_email
        self.sender_password = sender_password
        self.smtp_server = smtp_server
        self.port = port
    def send_email(self, otp, recipient)->dict:
        message = MIMEMultipart("alternative")
        message["Subject"] = "OTP"
        message["From"] = self.sender_email
        message["To"] = recipient

        text = f"""\
        Hi,
        Your OTP is: {otp}
        """
        part = MIMEText(text, "plain")
        message.attach(part)

        try:
            server = smtplib.SMTP(self.smtp_server, self.port)
            server.starttls()  # Secure the connection
            server.login(self.sender_email, self.sender_password)
            server.sendmail(self.sender_email, recipient, message.as_string())
            server.quit()
            print("OTP sent successfully.")
            return {"status" : True, "message":"OTP sent successfully.","response_status_code":200}
        except Exception as e:
            print(f"Failed to send OTP. Error: {e}")
            return {"status": False, "message":"Not Sent for"+str(e),"response_status_code":404}

