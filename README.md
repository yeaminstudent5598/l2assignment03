# 📚 Library Management API

A simple RESTful API for managing books and borrowing records, built using **Express.js**, **TypeScript**, and **MongoDB (Mongoose)**.

---

## 🚀 Features

- 📖 Create, Read, Update, Delete (CRUD) operations for Books
- 🔍 Filter and sort books by genre, date, etc.
- 📦 Borrow books and manage available copies
- 📊 Aggregated summary of borrowed books (using MongoDB Aggregation)
- ✅ Schema validation using Mongoose
- ⚙️ Middleware and custom business logic

---

## 📁 Project Structure

├── src
│ ├── app
│ │ ├── controllers
│ │ ├── models
│ │ ├── routes
│ ├── index.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json


---

## 📦 Tech Stack

- **Backend:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB (with Mongoose)
- **Validation & Logic:** Mongoose Schema, Middleware, Aggregation

---

## 🔧 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/library-api.git
cd library-api
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Create a .env File
env
Copy
Edit
PORT=5000
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/library
⚠️ Make sure to not push this file! It's ignored via .gitignore.

4️⃣ Start the Development Server
bash
Copy
Edit
npm run dev
📮 API Endpoints
✅ Book Routes
Method	Endpoint	Description
POST	/api/books	Create a new book
GET	/api/books	Get all books (filterable)
GET	/api/books/:bookId	Get a book by ID
PUT	/api/books/:bookId	Update a book
DELETE	/api/books/:bookId	Delete a book

✅ Borrow Routes
Method	Endpoint	Description
POST	/api/borrow	Borrow a book
GET	/api/borrow	Get summary of borrowed books

📊 Example Aggregated Response
json
Copy
Edit
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    }
  ]
}
📽️ Video Explanation
👉 Click here to watch the video explanation

📌 Author
Name: Yeamin Madbor

Email: yeaminstudent5598@gmail.com

GitHub: @yeaminstudent5598

📄 License
This project is open-source and available under the MIT License.


---

## 🎁 Bonus Suggestion:

- চাইলে তুমি `README.md` এর নিচে Live Link, Screenshot, অথবা API Docs (Swagger) লিংকও যোগ করতে পারো।

> বলো ভাই, এটা PDF বানিয়ে দিবো নাকি সরাসরি তোমার প্রজেক্টে paste করে দিবে? 😄
