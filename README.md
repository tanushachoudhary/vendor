# 🛍️ Vendor Management System

A web-based Vendor Management System built to streamline the process of managing vendors, products, and inventory with an intuitive interface and efficient backend.

## 🚀 Features

- 🔐 Admin authentication and secure login
- 📋 Vendor listing with details
- 🧾 Product management per vendor
- 📦 Inventory tracking
- 📝 CRUD operations (Create, Read, Update, Delete) for vendors/products
- 📊 Dashboard for quick analytics
- 🔍 Search and filter capabilities

## 🛠️ Tech Stack

**Frontend**
- HTML, CSS, JavaScript
- Bootstrap 5

**Backend**
- Node.js + Express.js

**Database**
- MySQL

**Other Tools**
- Postman (for API testing)
- Sequelize ORM (optional if used)

## 📁 Project Structure

```

vendor/
├── config/             # Database and server configuration
├── controllers/        # Request handling logic
├── models/             # DB models
├── routes/             # Route definitions
├── views/              # HTML/templating views
├── public/             # Static assets (CSS, JS)
├── .env                # Environment variables
├── server.js           # Entry point
└── package.json

````

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js v16+
- MySQL server running

### Installation

1. Clone the repository:

```bash
git clone https://github.com/tanushachoudhary/vendor.git
cd vendor
````

2. Install dependencies:

```bash
npm install
```

3. Set up `.env`:

Create a `.env` file and add your database credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=vendor_db
PORT=3000
```

4. Run the app:

```bash
node server.js
```

Then visit `http://localhost:3000` in your browser.

## 🧪 API Endpoints (Sample)

* `GET /vendors` – List all vendors
* `POST /vendors` – Add a new vendor
* `PUT /vendors/:id` – Update vendor
* `DELETE /vendors/:id` – Delete vendor
* `GET /products?vendor_id=1` – Products by vendor

## 🖼️ Screenshots

> *You can add screenshots here to show how your app looks in action.*

## ✍️ Author

* **Tanusha Choudhary**
  [GitHub](https://github.com/tanushachoudhary)

## 📄 License

This project is licensed under the [MIT License](LICENSE).

