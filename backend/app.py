import psycopg2
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from werkzeug.security import check_password_hash
from urllib.parse import unquote 
import re

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
    cur.execute(""" 
        CREATE TABLE IF NOT EXISTS newsletter (
            id SERIAL PRIMARY KEY,
            full_name VARCHAR(50) NOT NULL,
            email VARCHAR(120) UNIQUE NOT NULL,
            subject VARCHAR(50) NOT NULL,
            message TEXT NOT NULL,
            subscribed BOOLEAN DEFAULT TRUE
        )
    """)

    conn.commit()
    cur.close()
    conn.close()

# Ensure table exists before running the app
create_table()

# Initialize bcrypt
bcrypt = Bcrypt(app)

# API Route for User Newsletter
@app.route("/subscribe", methods=["POST"])
def subscribe():
    data = request.json
    full_name = data.get("full_name")
    email = data.get("email")
    subject = data.get("subject", "General")  # Default: General
    message = data.get("message", "")  # Default: Empty
    subscribed = data.get("subscribed", True)

    if not full_name or not email:
        return jsonify({"error": "Full name and email are required"}), 400

    conn = get_db_connection()
    cur = conn.cursor()

    try:
        # Insert subscriber data into newsletter table
        cur.execute("""
            INSERT INTO newsletter (full_name, email, subject, message, subscribed) 
            VALUES (%s, %s, %s, %s, %s)
            ON CONFLICT (email) DO UPDATE
            SET subject = EXCLUDED.subject,
                message = EXCLUDED.message,
                subscribed = EXCLUDED.subscribed
        """, (full_name, email, subject, message, subscribed))
        conn.commit()

    except psycopg2.Error as e:
        conn.rollback()
        return jsonify({"error": "Failed to subscribe", "details": str(e)}), 500

    finally:
        cur.close()
        conn.close()

    return jsonify({"message": "Successfully subscribed to the newsletter!"}), 201

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

# API Route for User Login
@app.route('/SignIn', methods=['POST'])
def sign_in():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    conn = get_db_connection()
    cur = conn.cursor()

    try:
        # Fetch user details along with hashed password
        cur.execute("SELECT first_name, last_name, phone_no, email, password FROM users WHERE email=%s", (email,))
        user = cur.fetchone()

        if user:
            db_password = user[4]
            # print("Retrieved Password from DB:", db_password)
            if not db_password:
                return jsonify({"error": "Password not found in the database"}), 500

            if bcrypt.check_password_hash(db_password, password):
                return jsonify({"message": "Login successful", "user": {"first_name": user[0], "last_name": user[1], "phone_no": user[2], "email": user[3]}})
            else:
                return jsonify({"error": "Invalid credentials"}), 401
        else:
            return jsonify({"error": "User not found"}), 404

    except psycopg2.Error as e:
        return jsonify({"error": "Database error", "details": str(e)}), 500

    finally:
        cur.close()
        conn.close()

# API to fetch recipes by cuisine
@app.route("/recipes", methods=["GET"])
def get_recipes():
    cuisine = request.args.get("cuisine")
    
    if not cuisine:
        return jsonify({"error": "Cuisine parameter is required"}), 400

    conn = get_db_connection()
    cur = conn.cursor()

    try:
        # Query to fetch recipes based on cuisine
        cur.execute("""
            SELECT recipes.recipe_name, recipes.course, recipes.total_time, recipes.url FROM recipes 
                    WHERE recipes.cuisine = %s
        """, (cuisine,))
        recipes = cur.fetchall()

        # Convert the data into JSON format
        recipe_list = [
            {"title": row[0], "course": row[1], "total_time": row[2], "image": row[3]}
            for row in recipes
        ]   

        return jsonify(recipe_list), 200
    
    except psycopg2.Error as e:
        return jsonify({"error": "Database error", "details": str(e)}), 500

    finally:
        cur.close()
        conn.close()

@app.route("/recipe/<path:recipe_name>", methods=["GET"])
def get_recipe_details(recipe_name):
    conn = get_db_connection()
    cur = conn.cursor()

    try:
        decoded_name = unquote(recipe_name)
        
        # Try exact match first
        cur.execute("SELECT * FROM recipes WHERE recipe_name = %s", (decoded_name,))
        recipe = cur.fetchone()
        
        # If not found, try more flexible matching
        if not recipe:
            # Remove "Recipe" suffix if present
            search_name = re.sub(r'\s*Recipe\s*$', '', decoded_name, flags=re.IGNORECASE)
            cur.execute("SELECT * FROM recipes WHERE recipe_name ILIKE %s", (f"%{search_name}%",))
            recipe = cur.fetchone()

        if not recipe:
            return jsonify({
                "error": "Recipe not found",
                "searched_for": decoded_name,
                "suggestions": "Try removing 'Recipe' suffix or special characters"
            }), 404

        # Map columns to proper names
        recipe_details = {
            "id": recipe[0],
            "title": recipe[1],
            "ingredients": recipe[2],
            "prep_time": recipe[3],
            "cook_time": recipe[4],
            "total_time": recipe[5],
            "serving": recipe[6],
            "cuisine": recipe[7],
            "course": recipe[8],
            "diet": recipe[9],
            "instructions": recipe[10],
            "url": recipe[11]
        }

        return jsonify(recipe_details), 200
    
    except psycopg2.Error as e:
        return jsonify({"error": "Database error", "details": str(e)}), 500
    finally:
        cur.close()
        conn.close()

@app.route("/search-recipes", methods=["GET"])
def search_recipes():
    query = request.args.get("q")
    
    if not query:
        return jsonify({"error": "Search query is required"}), 400

    conn = get_db_connection()
    cur = conn.cursor()

    try:
        # Search in recipe_name, ingredients, and cuisine
        cur.execute("""
            SELECT * FROM recipes 
            WHERE recipe_name ILIKE %s 
               OR ingredients ILIKE %s 
               OR cuisine ILIKE %s
            LIMIT 50
        """, (f"%{query}%", f"%{query}%", f"%{query}%"))
        
        recipes = cur.fetchall()
        
        # Convert to dictionary format matching your existing structure
        recipe_list = [{
            "id": r[0],
            "title": r[1],
            "ingredients": r[2],
            "prep_time": r[3],
            "cook_time": r[4],
            "total_time": r[5],
            "serving": r[6],
            "cuisine": r[7],
            "course": r[8],
            "diet": r[9],
            "instructions": r[10],
            "url": r[11]
        } for r in recipes]

        return jsonify(recipe_list), 200
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cur.close()
        conn.close()

if __name__ == "__main__":
    app.run(debug=True)
