var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes.js');    // JEG HAR TILFØJET DEN HER!


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { username: req.session.userName });
});

router.get('/login', function(req,res,next){
  res.render('login');
});


router.get('/randomjoke', function(req,res, next){ // jeg har selv tilføjet denne
  if(req.session.jokeCount){
    req.session.jokeCount++;
  } else {
    req.session.jokeCount = 1;
  }
  console.log("Antal random jokes: "+req.session.jokeCount);
  res.render('randomjoke', {
    randomjoke: jokes.getRandomJoke()
  })
});


router.get('/alljokes', function(req,res,next){
  if(req.session.jokesCount){
    req.session.jokesCount++;
  } else {
    req.session.jokesCount = 1;
  }
  console.log("Antal all jokes: "+req.session.jokesCount);
  res.render('alljokes', {
    jokearray: jokes.allJokes()
  });
});

router.get('/addjoke', function(req,res,next){
  if(req.session.storeJokeCount){
    req.session.storeJokeCount++;
  } else {
    req.session.storeJokeCount = 1;
  }
  console.log("Antal add jokes: "+req.session.storeJokeCount);
  res.render('addjoke')
});

router.post('/storejoke', function(req,res,next){
  var newJoke = req.body.joke;
  jokes.addJoke(newJoke);
  res.redirect('/addjoke');
});

module.exports = router;


