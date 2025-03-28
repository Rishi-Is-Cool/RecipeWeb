import psycopg2
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt

app = Flask(__name__)
CORS(app)

# Database Configuration
DB_CONFIG = {
    "dbname": "recipe_website",
    "user": "postgres",
    "password": "password",
    "host": "localhost",
    "port": 5432
}

# Function to get DB connection
def get_db_connection():
    return psycopg2.connect(**DB_CONFIG)

# Create users table if not exists
def create_table():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(""" 
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(30) NOT NULL,
            last_name VARCHAR(30) NOT NULL,
            phone_no VARCHAR(15) UNIQUE NOT NULL,
            email VARCHAR(120) UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    """)
    conn.commit()
    cur.close()
    conn.close()

# Ensure table exists before running the app
create_table()

# Initialize bcrypt
bcrypt = Bcrypt(app)

# API Route for User Registration
@app.route("/SignUp", methods=["POST"])
def register():
    data = request.json
    first_name = data.get("first_name")
    last_name = data.get("last_name")
    phone_no = data.get("phone_no")
    email = data.get("email")
    password = data.get("password")

    if not all([first_name, last_name, phone_no, email, password]):
        return jsonify({"error": "All fields are required"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    conn = get_db_connection()
    cur = conn.cursor()

    try:
        cur.execute(
            "INSERT INTO users (first_name, last_name, phone_no, email, password) VALUES (%s, %s, %s, %s, %s) RETURNING id",
            (first_name, last_name, phone_no, email, hashed_password)
        )
        user_id = cur.fetchone()[0]
        conn.commit()

    except psycopg2.Error as e:
        conn.rollback()
        return jsonify({"error": "Failed to register user", "details": str(e)}), 400

    finally:
        cur.close()
        conn.close()

    return jsonify({"message": "User registered successfully", "user_id": user_id}), 201

if __name__ == "__main__":
    app.run(debug=True)
