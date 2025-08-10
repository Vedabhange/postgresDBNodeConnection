# PostgreSQL Connection Example (Node.js + Sequelize)

This project demonstrates how to connect a Node.js server to a PostgreSQL database using Sequelize ORM.

## Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL (ensure it is installed and running)
- An existing database with an `Employees` table

## 1. Update Database Credentials
Before running the project, open **`server/postgres/postgres.js`** (or your config file) and update the following details:

```javascript
const sequelize = new Sequelize('YourDatabaseName', 'YourPostgresUsername', 'YourPostgresPassword', {
  host: 'localhost',
  dialect: 'postgres'
});


Replace:

YourDatabaseName → Your PostgreSQL database name

YourPostgresUsername → Your PostgreSQL username

YourPostgresPassword → Your PostgreSQL password

Make sure your  table matches your model definition.

2. Installation
Navigate to the server folder:

bash
Copy
Edit
cd server
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
npm start

server/
│
├── controller/
│   └── userController.js   # Handles API requests
│
├── postgres/
│   ├── postgres.js         # Database connection config
│   └── user.model.js       # Sequelize model for Employees table
│
├── index.js                # Server entry point
├── package.json
└── README.md





