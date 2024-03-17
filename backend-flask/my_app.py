from flask import Flask, send_file, request, jsonify
from reportlab.pdfgen import canvas
from flask_cors import CORS
from pdf_generator import PDFGenerator
from config import PDF_FILE_NAME
app = Flask(__name__)
CORS(app)

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
        app.run(debug=True)
