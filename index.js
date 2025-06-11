const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

const db = require('./db');

app.use(express.json());

// GET bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM bookings');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching bookings');
  }
});

// POST a booking
app.post('/api/bookings', async (req, res) => {
  const { name, date, time, email, phone } = req.body;

  try {
    await db.query(
      'INSERT INTO bookings (name, date, time, email, phone) VALUES (?, ?, ?, ?, ?)',
      [name, date, time, email, phone]
    );
    res.status(201).send('Booking added');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding booking');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
