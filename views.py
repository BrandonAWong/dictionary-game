from flask import Blueprint, render_template
from dictionary import dictionary


views = Blueprint(__name__, 'views')

@views.route('/')
def home():
    return render_template('index.html', data=dictionary)

@views.route('/login')
def login():
    return render_template('login.html')