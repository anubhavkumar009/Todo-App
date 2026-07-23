# 📝 MERN Todo App

A full-stack **Todo List Application** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). The application allows users to create, update, delete, and manage their daily tasks with persistent storage in MongoDB Atlas.

## 🚀 Live Demo

**Frontend:** https://todo-app-rho-one-15.vercel.app/

**Backend API:** https://todo-app-backend-vcrs.onrender.com/api/todos

---

## ✨ Features

* ✅ Add new todos
* ✏️ Edit existing todos
* 🗑️ Delete todos
* ✔️ Mark todos as completed
* 👀 Show/Hide completed todos
* 💾 Persistent storage using MongoDB Atlas
* 🔄 Real-time synchronization with backend API
* 📱 Responsive user interface
* ☁️ Deployed on Vercel and Render

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

## 📂 Project Structure

```text
Todo-App
│
├── client
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/anubhavkumar009/Todo-App.git

cd Todo-App
```

---

## 🔹 Backend Setup

```bash
cd server

npm install
```

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Run the backend:

```bash
npm run dev
```

or

```bash
npm start
```

---

## 🔹 Frontend Setup

Open another terminal.

```bash
cd client

npm install
```

Create a `.env` file inside the `client` folder:

```env
VITE_API_URL=http://localhost:3000
```

Run the frontend:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/todos`     | Fetch all todos   |
| POST   | `/api/todos`     | Create a new todo |
| PUT    | `/api/todos/:id` | Update a todo     |
| DELETE | `/api/todos/:id` | Delete a todo     |

---

## 📸 Screenshots

### Home Page



---

## 🔮 Future Improvements

* User Authentication (JWT)
* Individual user accounts
* Due dates
* Priority levels
* Categories
* Search functionality
* Drag and Drop support
* Dark Mode
* Toast Notifications
* Pagination

---

## 📚 What I Learned

This project helped me gain practical experience with:

* React Hooks
* REST APIs
* Express.js
* MongoDB Atlas
* Mongoose ODM
* Axios
* CRUD Operations
* Environment Variables
* CORS
* Full Stack Deployment
* GitHub
* Vercel
* Render

---

## 👨‍💻 Author

**Anubhav Kumar**

GitHub: https://github.com/anubhavkumar009

LinkedIn: https://www.linkedin.com/in/anubhav-kumar-6a95b93ab

Codeforces: https://codeforces.com/profile/devotee_of_supreme

LeetCode: https://leetcode.com/u/anubhav_kumar09/

---

⭐ If you found this project useful, consider giving it a star on GitHub
