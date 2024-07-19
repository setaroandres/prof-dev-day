import express from 'express';
import pkg from 'body-parser';
import mysql  from 'mysql2/promise';
import cors from 'cors';
const { json } = pkg;

const app = express();
const PORT = 3000;

//DB connection //This data needs to be stored on a .env file
const connection = mysql.createPool({
  host: 'localhost',
  user: 'andresDaniel',
  password: 'Trentsteel2309;',
  database: 'prof_dev_day',
});

app.use(json());
app.use(cors()); // This is needed to allow requests from your frontend to your backend

const queriesRoutes = {
  categories: '/categories',
  cars: '/cars',
  brands: '/brands',
  country: '/country',
  catalog: '/catalog',
}

// Define routes and queries to databases
app.get(queriesRoutes.categories, async(req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM categories');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).send(error);
  }
});

app.get(queriesRoutes.cars, async(req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM cars');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).send(error);
  }
});

app.get(queriesRoutes.brands, async(req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM brands');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).send(error);
  }
});

app.get(queriesRoutes.country, async(req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM country');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).send(error);
  }
});

app.get(queriesRoutes.catalog, async(req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM vwcatalogcars');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching catalog:', error);
    res.status(500).send(error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
