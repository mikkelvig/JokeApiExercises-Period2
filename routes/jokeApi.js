/**
 * Created by Mikkel on 03-03-2016.
 */

var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes.js');

router.get('/joke/random', function(req, res, next) {
    res.json({joke: jokes.getRandomJoke()})
});

router.get('/jokes', function(req, res, next) {
    res.json({jokes: jokes.allJokes()})
});

router.post('/joke', function(req, res, next) {
    var newJoke = req.body.joke;
    jokes.addJoke(newJoke);
    res.json({joke: newJoke});
});

module.exports = router;
