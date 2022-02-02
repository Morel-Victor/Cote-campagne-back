const express = require('express');

const router = express.Router();
const { db } = require('../db-config');

router.get('/', async (req, res) => {
  try {
    const [img] = await db.query(`
    SELECT * FROM Carousel
  `);
    res.json(img).status(201);
  } catch (err) {
    res.status(404);
    console.warn(err);
  }
});

module.exports = router;
