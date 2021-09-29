import time
from flask import Flask, request
from flask.json import jsonify
from flaskext.mysql import MySQL


app = Flask(__name__)

# Change this to your secret key (can be anything, it's for extra protection)
app.secret_key = 'secret'

# Enter your database connection details below
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'sentiment_analysis'

# Initialize MySQL
mysql = MySQL()
mysql.init_app(app)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/products')
def get_products():
    cursor = mysql.get_db().cursor()
    cursor.execute('SELECT * FROM products')
    # Fetch one record and return result
    products = cursor.fetchall()
    return jsonify(products)


@app.route('/users', methods=['GET'])
def get_users():
    cursor = mysql.get_db().cursor()
    cursor.execute('SELECT * FROM accounts')
    # Fetch one record and return result
    accounts = cursor.fetchall()
    return jsonify(accounts)


@app.route('/login', methods=['POST'])
def login():
    # Output message if something goes wrong...
    msg = 'none'
    # Check if "email" and "password" POST requests exist (user submitted form)
    user = request.json
    if request.method == 'POST':
        # Create variables for easy access
        email = user['email']
        password = user['password']
        # Check if account exists using MySQL
        cursor = mysql.get_db().cursor()
        cursor.execute('SELECT * FROM accounts WHERE email = %s AND password = %s', (email, password,))
        # Fetch one record and return result
        account = cursor.fetchone()
        # print(account)
        # If account exists in accounts table in out database
        if account:
            # Create session data, we can access this data in other routes
            msg = 'Login Successful'
            # Return response
            return jsonify(msg, user)
        else:
            # Account doesnt exist or username/password incorrect
            msg = 'Account doesnt exist or username/password incorrect'
            return jsonify(msg, user)
    # Show response(if any)
    return jsonify(msg)


@app.route('/reviews')
def get_reviews():
    cursor = mysql.get_db().cursor()
    cursor.execute('SELECT * FROM reviews')
    # Fetch one record and return result
    reviews = cursor.fetchall()
    return jsonify(reviews)


@app.route('/review', methods=['POST'])
def post_review():
    """
    Post Review
    """
    # print(request.json)
    try:
        product_review = request.json
        print(product_review['productId'])
        product_id = product_review['productId']
        review = product_review['review']
        sql = """INSERT INTO reviews (productId, review) VALUES ('%s', '%s')""" % (product_id, review)
        cursor = mysql.get_db().cursor()
        cursor.execute(sql)
        mysql.get_db().commit()
        cursor.close()
        return {
            'status': 200,
            'msg': 'Successful'
        }
    except Exception as e:
        print("Problem inserting into db: " + str(e))
        return "False"


app.run(host='localhost', port=5000)
