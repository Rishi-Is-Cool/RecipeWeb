# RecipeWeb

An interactive full-stack recipe platform built with **React.js (frontend)** and **Flask + PostgreSQL (backend)**.

---

## 📖 Summary
RecipeWeb allows users to browse, search, and manage food recipes through an intuitive interface.  
It demonstrates full-stack development skills by combining a React frontend with a Flask REST API and PostgreSQL database.

---

## ✨ Features
- Browse recipes with a clean, responsive UI  
- Search and filter by ingredients or categories  
- Add, edit, and delete recipes (CRUD functionality)  
- RESTful API built with Flask  
- PostgreSQL integration for reliable data storage  

---

## 🛠 Tech Stack
| Layer     | Tech Stack                     |
|-----------|--------------------------------|
| Frontend  | React.js                       |
| Backend   | Flask (Python) + REST API      |
| Database  | PostgreSQL                     |
| Styling   | CSS / Tailwind (if used)       |
| Version Control | Git & GitHub             |

---

## 🚀 Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/Rishi-Is-Cool/RecipeWeb.git
cd RecipeWeb
```

### 2. Backend (Flask API)
```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

- Create a PostgreSQL database (e.g., `recipeweb_db`).
- Update your `.env` (or `config.py`) with DB credentials:
  ```
  DB_HOST=localhost
  DB_USER=your_username
  DB_PASSWORD=your_password
  DB_NAME=recipeweb_db
  ```

- Run the backend:
  ```bash
  flask run
  ```
- Backend runs at: `http://127.0.0.1:5000`

### 3. Frontend (React)
```bash
cd frontend
npm install
npm start
```
- Frontend runs at: `http://localhost:3000`

---

## 📂 API Endpoints (Examples)
- `GET /recipes` – Fetch all recipes  
- `GET /recipes/<id>` – Fetch a recipe by ID  
- `POST /recipes` – Add a new recipe  
- `PUT /recipes/<id>` – Update an existing recipe  
- `DELETE /recipes/<id>` – Delete a recipe  

---

## 🎮 Usage
Once both frontend and backend are running:
- Visit `http://localhost:3000` to interact with the app.  
- Use search bar or categories to find recipes.  
- Add or update recipes through the UI (if enabled).  

*(Add screenshots/GIFs here to make it visually appealing.)*

---

## 📌 Roadmap
- [ ] Add user authentication & profiles  
- [ ] Recipe ratings and comments  
- [ ] Image upload for recipes  
- [ ] Deployment (Frontend: Vercel/Netlify, Backend: Render/Heroku)  

---

## 🤝 Contributing
Contributions are welcome!  

1. Fork the repo  
2. Create a branch (`git checkout -b feature/my-feature`)  
3. Commit changes (`git commit -m 'Add feature'`)  
4. Push (`git push origin feature/my-feature`)  
5. Open a Pull Request  

---

## 👨‍💻 Author
**Rishikesh Patil**  
- GitHub: [Rishi-Is-Cool](https://github.com/Rishi-Is-Cool)
- LinkedIn: [Rishikesh Patil](https://www.linkedin.com/in/rishikesh-patil-486194312/)  
- Email: rishikeshpatil0605@gmail.com  

### **📜 License**

This project is licensed under the MIT License.
