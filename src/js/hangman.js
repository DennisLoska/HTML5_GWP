"use strict";
window.onload = function(){};
var lives;
var counter; // counter correct guess
var guess;
var getHint;
var guesses = []; //stored guesses
var space; // number of spaces in word ' '
var categories;


var showLives = document.getElementById("mylives");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");
var letters = document.getElementsByClassName("letter-button");
var keypad = document.getElementsByClassName("alphabet-keypad");

//Create guesses ul
function result(){
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i =0; i < word.length; i++){
        correct.setAttribute('id', 'my word')
        guess = document.createElement('li');
        guess.setAttribute('class','guess');
        if(word[i] === " "){
            guess.innerHTML = " ";
            space = 1;
        }else{
            guess.innerHTML = "_";
        }

        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

// Show lives
function comments(){
    showLives.innerHTML = "You have" + lives + "lives";
    if(lives < 1){
        showLives.innerHTML = "Game Over";
    }
    for (var i=0; i<guesses.length; i++){
        if(counter + space === guesses.length){
            showLives.innerHTML = "You Win!";
        }
    }
}

function play(){
    categories = ["Africa","Europe","Asia","North America","South America", "Antarctica", "Australia"];

  var easyArray = hangmanWords.filter(function(word){
    return word.length <= 4;
  });

  var hardArray = hangmanWords.filter(function(word){
    return word.length > 4;
  });

  function wordSelect (array) {
    var num = Math.floor(Math.random() * (array.length - 1));
    var word = array[num];
    return word;
  }

//hint
function hint(){
    hints = ["Egypt is a country of this continent","Germany is a country of this continent","Japan is a country of this continent","USA is a country of this continent","Brazil is a country of this continent","This continent has the penguin and the polar bear","New Zealand is a country of this continent"];

    showClue.innerHTML = "Clue: " + hints;
};

//reset game
document.getElementById('reset').onclick = function() {
correct.parentNode.removeChild(correct);
letters.parentNode.removeChild(letters);
showClue.innerHTML = "";
play();
