from flask import Blueprint, render_template, jsonify
from csv import DictReader
from random import choice


views = Blueprint(__name__, 'views')
with open('wordlist.csv', 'r', encoding='cp850') as word_list:
    bank: DictReader = DictReader(word_list)
    dictionary: list[dict] = [row for row in bank]

@views.route('/')
def home():
    options = [choice(dictionary) for _ in range(4)]
    correct_option = choice(options)
    c_definition = correct_option['Definition'].replace(correct_option['Word'], '______')
    return render_template('index.html', definition=c_definition, data=options)

@views.route('/login')
def login():
    return render_template('login.html')