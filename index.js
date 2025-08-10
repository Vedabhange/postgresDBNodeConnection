import express from 'express';
import { connection } from './postgres/postgres.js';
import router from './view/routes.js';

const app = express();
app.use(express.json());
app.use("/",router);

const PORT = 8000;

app.listen(PORT, async () => {
  try {
    await connection(); // Ensure the database connection is established before starting the server
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the process if the database connection fails
  }
});