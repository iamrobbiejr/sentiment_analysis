import time
from flask import Flask, request
from flask.json import jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS
# Importing essential libraries
import pickle
from bs4 import BeautifulSoup
import re


def decontracted(phrase):
    # specific
    phrase = re.sub(r"won't", "will not", phrase)
    phrase = re.sub(r"don't", "do not", phrase)
    phrase = re.sub(r"can\'t", "can not", phrase)

    # general
    phrase = re.sub(r"n\'t", " not", phrase)
    phrase = re.sub(r"\'re", " are", phrase)
    phrase = re.sub(r"\'s", " is", phrase)
    phrase = re.sub(r"\'d", " would", phrase)
    phrase = re.sub(r"\'ll", " will", phrase)
    phrase = re.sub(r"\'t", " not", phrase)
    phrase = re.sub(r"\'ve", " have", phrase)
    phrase = re.sub(r"\'m", " am", phrase)
    return phrase


stopwords = set(['br', 'the', 'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", \
                 "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', \
                 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', \
                 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', \
                 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', \
                 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', \
                 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before',
                 'after', \
                 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again',
                 'further', \
                 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few',
                 'more', \
                 'most', 'other', 'some', 'such', 'only', 'own', 'same', 'so', 'than', 'too', 'very', \
                 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o',
                 're', \
                 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', \
                 "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', \
                 "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren',
                 "weren't", \
                 'won', "won't", 'wouldn', "wouldn't"])


def clean_text(sentence):
    sentence = re.sub(r"http\S+", "", sentence)
    sentence = BeautifulSoup(sentence, 'lxml').get_text()
    sentence = decontracted(sentence)
    sentence = re.sub("\S*\d\S*", "", sentence).strip()
    sentence = re.sub('[^A-Za-z]+', ' ', sentence)
    # https://gist.github.com/sebleier/554280
    sentence = ' '.join(e.lower() for e in sentence.split() if e.lower() not in stopwords)
    return sentence.strip()


# Load the Multinomial Naive Bayes model and CountVectorized object from disk
filename = 'model.pkl'
model = pickle.load(open(filename, 'rb'))
vectorized = pickle.load(open('vectorizer.pkl', 'rb'))

app = Flask(__name__)
CORS(app)

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


@app.route('/product', methods=['POST'])
def product():
    # Output message if something goes wrong...
    msg = 'none'
    # Check if "email" and "password" POST requests exist (user submitted form)
    req = request.json
    if request.method == 'POST':
        # Create variables for easy access
        prod_id = req['id']
        # Check if account exists using MySQL
        cursor = mysql.get_db().cursor()
        cursor.execute('SELECT * FROM products WHERE productId = %s', prod_id)
        # Fetch one record and return result
        single_product = cursor.fetchone()
        # print(account)
        return jsonify(single_product)
    # Show response(if any)
    return jsonify(msg)


@app.route('/add_product', methods=['POST'])
def add_product():
    # Output message if something goes wrong...
    msg = 'none'

    req = request.json
    if request.method == 'POST':
        # Create variables for easy access
        prod_name = req['name']
        prod_brand = req['brand']
        # Check if account exists using MySQL
        sql = '''INSERT INTO products (name, brand) VALUES ('%s', '%s')''' % (
            prod_name, prod_brand)
        cursor = mysql.get_db().cursor()
        cursor.execute(sql)
        mysql.get_db().commit()
        cursor.close()
        # print(account)
        return 'success'
    # Show response(if any)
    return jsonify(msg)


@app.route('/delete_product', methods=['POST'])
def delete_product():
    # Output message if something goes wrong...
    msg = 'none'

    req = request.json
    if request.method == 'POST':
        # Create variables for easy access
        prod_id = req['id']
        # Check if account exists using MySQL
        sql = '''DELETE FROM products WHERE productId = %s''' % prod_id
        cursor = mysql.get_db().cursor()
        cursor.execute(sql)
        mysql.get_db().commit()
        cursor.close()
        # print(account)
        return 'success'
    # Show response(if any)
    return jsonify(msg)


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


@app.route('/product_reviews', methods=['POST'])
def product_reviews():
    # Output message if something goes wrong...
    msg = 'none'
    # Check if "email" and "password" POST requests exist (user submitted form)
    req = request.json
    if request.method == 'POST':
        # Create variables for easy access
        prod_id = req['id']
        # Check if account exists using MySQL
        cursor = mysql.get_db().cursor()
        cursor.execute('SELECT * FROM reviews WHERE productId = %s', prod_id)
        # Fetch one record and return result
        reviews = cursor.fetchall()
        # print(account)
        return jsonify(reviews)
    # Show response(if any)
    return jsonify(msg)

@app.route('/review', methods=['POST'])
def post_review():
    """
    Post Review
    """
    # print(request.json)
    try:
        product_review = request.json
        print("id", product_review['review'])
        product_id = product_review['productId']
        review = product_review['review']
        review_text = decontracted(review)
        deconText = decontracted(review)
        print("decontracted done: " + review_text)
        review_text = clean_text(review)
        print("clean done: " + review_text)
        test_vect = vectorized.transform(([review_text]))
        print("vectorized done: ")
        print(test_vect)
        my_prediction = model.predict(test_vect)
        print("prediction: ", my_prediction[0])
        sql = '''INSERT INTO reviews (productId, review, isGood) VALUES ('%s', '%s', '%s')''' % (
            product_id, deconText, my_prediction[0])
        cursor = mysql.get_db().cursor()
        cursor.execute(sql)
        mysql.get_db().commit()
        cursor.close()
        return 'successful'
    except Exception as e:
        print("Problem inserting into db: " + str(e))
        return "False"


# app.run(host='localhost', port=5000)
