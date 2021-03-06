const express = require('express');
const Movie = require('../models/Movie.model')
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((data) => {
        console.log(data)
        res.render('movies', {movies: data})
    }).catch((err) => {
        console.log(err)
    });
});

router.get('/movie/:id' , (req, res, next) => {
    let id = req.params.id
    Movie.findById(id)
    .then((data) => {
        res.render('movie', {pelicula: data})
    }).catch((err) => {
        console.log(err)
    });
})

module.exports = router;
