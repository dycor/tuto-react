const express = require('express');
const router = express.Router();
const Movie  = require('../models/movie')

router.get('/', (req, res) => {
  Movie.find().then(data => res.json(data));
});

router.post('/', (req,res) => {
  const movie = new Movie(req.body);

  movie.save().then(data => res.status(201).json(data)
    .catch(error => {
      if(error.name === "ValidationError"){
        res.status(400).json(error.errors);
      } else {
        res.sendStatus(500);
      }
    }
  ))
});

module.exports = router;