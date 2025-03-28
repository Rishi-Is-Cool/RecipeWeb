import psycopg2
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DB_CONFIG = {
    "dbname" : "recipe",
    "user" : "postgres",
    "password" : "password",
    "host" : "localhost",
    "port" : "5432"
}

def get_db_connection():
    return pyscopg2.connect(**DB_CONFIG)
