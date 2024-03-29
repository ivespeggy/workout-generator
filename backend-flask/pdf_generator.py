from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from config import PDF_FILE_NAME

import datetime

class PDFGenerator:
    def __init__(self, data) -> None:
        self.data = data
    
    def parse_data_daysSelected(self):
        days_selected = self.data.get('daysSelected', 'default_days_selected')
        return days_selected
    
    def parse_data_workout_names(self):
        workout_names = self.data.get('dayWorkouts','default_workout_name')
        return workout_names
    

    def generate_pdf(self, file_path=PDF_FILE_NAME):
        # create PDF canvas        
        c = canvas.Canvas(file_path, pagesize=A4)
        width, height = A4
        font_times_roman = "Times-Roman"
        workout_title = "Workout Plan"

        c.setFont(font_times_roman, 18)
        c.drawString(240, 780, workout_title)


        # form position
        x_pos = 5.5*cm
        y_pos = height - 4 * cm 
        y_pos_start = y_pos

        # cell width and height
        cell_width = 5*cm
        cell_height = 2*cm

        # array of days of week.
        week_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]

        # draw row
        for i in range(len(week_days) + 1):
            c.line(x_pos, y_pos, x_pos + cell_width * 2, y_pos)
            y_pos -= cell_height

        # draw col
        for i in range(3):
            c.line(x_pos + i * cell_width, y_pos_start, x_pos + i * cell_width, y_pos_start - cell_height * (len(week_days)))

        # draw string in each row.
        y_pos = y_pos_start - cell_height / 2
        c.setFont(font_times_roman, 14)
        for day in week_days:
            c.drawString(x_pos + 0.2 * cm, y_pos, day)
            # update y postion after each iteration.
            y_pos -= cell_height

        
        # reset y
        y_pos = y_pos_start - cell_height / 2


        days_selected = self.parse_data_daysSelected()
        workout_names = self.parse_data_workout_names()


        for key, val in days_selected.items():
            if not val:
                # if val is false, which means user toggle off the checkbox
                c.drawString(x_pos+ 5.2 * cm, y_pos, "REST")
            else:
                c.drawString(x_pos + 5.2 * cm, y_pos, workout_names[key])
                # draw checkbox
                c.rect(x_pos+ 8 *cm, y_pos, 15, 15)

            y_pos -= cell_height

        date = datetime.datetime.now()
        formatted_date = date.strftime("%B %d, %Y")
        print(formatted_date)
        
        c.drawString( 240, 100,formatted_date )

        c.save()
