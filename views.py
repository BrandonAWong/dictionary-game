from flask import Blueprint, render_template
from csv import DictReader


views = Blueprint(__name__, 'views')
with open('wordlist.csv', 'r', encoding='cp850') as word_list:
    bank: DictReader = DictReader(word_list)
    dictionary: list[dict] = [row for row in bank]

@views.route('/')
def home():
    return render_template('index.html', data=dictionary)

@views.route('/login')
def login():
    return render_template('login.html')