import os
from flask import Flask, send_file, request, jsonify
from reportlab.pdfgen import canvas
from flask_cors import CORS
from pdf_generator import PDFGenerator
from config import PDF_FILE_NAME
from send_email import EmailSender
from dotenv import load_dotenv
from redis_server import RedisServer
from generate_otp_code import OTPGenerator
load_dotenv()
app = Flask(__name__)
CORS(app)

sender_email = os.getenv('TEST_EMAIL')
password = os.getenv('PASSWORD')
recipient = os.getenv('TEST_RECP')

redis_server = RedisServer()
generate_otp_code = OTPGenerator()
email_sender = EmailSender(sender_email=sender_email, sender_password=password)

@app.route('/login', methods=['post'])
def login():
    data = request.get_json()
    if data is None:
         return jsonify({'error': 'Invalid JSON data'}), 400
    email = data.get('email', 'default_email')
    res = redis_server.retrieve_user_info(email)
    redis_server.list_all_user(top_number=100)
    if res['status']:
        return jsonify({'message': res['message']}), res['response_status_code']
    else:
        return jsonify({'message': res['message']}), res['response_status_code']

@app.route('/register',methods=['POST'])
def register():
    data = request.get_json()
    if data is None:
          return jsonify({'error':'Invalid JSON data'}), 400

    # email is already validated in the frontend.
    # get email from the response
    email = data.get('email','default_email')
    # register user to the database.

    # res = redis_server.register_user(email)
    # generate otp code.
    code = generate_otp_code.generate_code()
    # register otp code with email address to the redis server.
    redis_server.store_otp(user_email=email, otp_code=code)
    res = email_sender.send_email(code,email)
    
    print("OTP Code is " +code)
    if res['status']:
        return jsonify({'message': res['message']}), res['response_status_code']
    else:
        return jsonify({'message': res['message']}), res['response_status_code']

@app.route('/validate_otp', methods=['GET'])
def validate_otp():
    # they should get a otp from their email.
    query_otp = request.args.get('otp', '0000000')
    email = request.args.get('email','default_email')
    otp_code_from_redis = redis_server.retrieve_otp(email)

    print(otp_code_from_redis)
    if otp_code_from_redis['data'] == query_otp:
        response = redis_server.register_user(email)
        if response['status']:
            return jsonify({'message': response['message']}), response['response_status_code']
        else:
            return jsonify({'message': response['message']}), response['response_status_code']
    else:
        return jsonify({'message': "failed"}), 449

@app.route('/generate_pdf', methods=['POST'])
def generate_pdf():
    data = request.get_json()

    if data is None:
          return jsonify({'error':'Invalid JSON data'}), 400
    days_selected = data.get('daysSelected','default')
    print(days_selected)
    
    # c = canvas.Canvas("file.pdf")
    # c.drawString(100, 750, "Hello World!")
    # c.save()
    pdf_generator = PDFGenerator(data)
    pdf_generator.generate_pdf()
    # return pdf
    return send_file(PDF_FILE_NAME, as_attachment=True)

if __name__ == '__main__':
        app.run(debug=True, port=6000)
