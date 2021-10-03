# Getting Started with Sentiment Analysis

This project was made using React[frontend], Flask[backend], NaiveBayesAlgorithm[model]

## Available Scripts [to be run on cmd/bash]

In the project directory[sentiment_analysis], first run:

###  `yarn install or npm install`

Then in the directory backend/api, activate virtual environment,
and install all python requirements inside requirements.txt:

### `source backend/api/venv/bin/activate`

### `pip install -r requirements.txt`

Now To run the project:

Configure database using xampp [recommended] / wamp

db_name: sentiment_analysis
import sentiment_analysis.sql

cd sentiment_analysis

[First]To start api run:

### `yarn start-api`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

[Second]To run web app:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

To login to the admin:
Open [http://localhost:3000/admin](http://localhost:3000/admin)

Username: admin@example.com
password: admin1234
