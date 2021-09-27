import time
from flask import Flask, request
from flask.json import jsonify
import random
from api import auth

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/products')
def get_products():
    return {'time': 'products'}


@app.route('/login', methods=['POST'])
def login():
    """
    Login User
    """

    user = request.json
    print(user)
    print('login')
    return jsonify({'status': 200, 'message': 'success'})


@app.route('/review', methods=['POST'])
def post_review():
    """
    Post Review
    """
    product_review = request.json
    print(product_review)
    # puzzle_solution = puzzle.get_solution(puzzle_board)
    print('success')
    return jsonify({'status': 200})
