/**
 * Created by Mikkel on 04-03-2016.
 */

var request = require("request");

var testOfPost = {
    url: "http://localhost:3000/api/joke",
    method: "POST",
    json: true,
    body: {joke : "Darth Vader is the prom queen"}
};

request(testOfPost, function(error, response, body){
    console.log(body.joke); // This will log 'Darth Vader is the prom queen'
});

request('http://localhost:3000/api/joke/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var randomJoke = JSON.parse(body);
        console.log("Here we have a random joke: "+randomJoke.joke)
    }
});

request('http://localhost:3000/api/jokes', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var allJokes = JSON.parse(body);
        console.log("All the jokes: "+allJokes.jokes)
    }
});
