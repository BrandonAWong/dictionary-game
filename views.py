from flask import Blueprint, render_template, redirect, url_for


views = Blueprint(__name__, 'views')

@views.route('/')
def home():
    return render_template('index.html', name='Brandon')

@views.route('/profile/<username>')
def profile(username):
    return render_template('index.html', name=username)

@views.route('go-home')
def go_home():
    return redirect(url_for('views.home'))