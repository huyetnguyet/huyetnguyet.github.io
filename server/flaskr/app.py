from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


'''

set FLASK_APP=app
flask run

'''
