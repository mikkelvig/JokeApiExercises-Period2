/**
 * Created by Mikkel on 26-02-2016.
 */

var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying",
    "Chat shit get banged",
    "Dem bitchez b trippin yo",
    "I am your father"
];


module.exports = {

    allJokes : function(){
        return jokes;
    },

    getRandomJoke : function(){
        var randomNumber = Math.floor((Math.random() * jokes.length) + 1);
        return jokes[randomNumber];
    },

    addJoke : function(newJoke){
        jokes.push(newJoke);
    }
};




