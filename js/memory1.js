"use strict";
var cardText = document.getElementsByClassName("memory-text");
var cards = document.getElementsByClassName("memory-card");
var check = false;
var active = 0;
var found = 0;
/*
 *Shows the game/memory-cards and invokes the function game()
 */
function start() {
    var i;
    if (check === false) {
        for (i = 0; i < cards.length; i += 1) {
            cards[i].style.visibility = "visible";
        }
        check = true;
    } else if (check === true) {
        for (i = 0; i < cardText.length; i += 1) {
            cards[i].style.visibility = "hidden";
        }
        check = false;
    }
    game();
}
/*
 *Shows the solution for the memory game.
 */
function solution() {
    for (let i = 0; i < cardText.length; i++) {
        cardText[i].style.visibility = "visible";
        cards[i].style.backgroundColor = "blue";
    }
}
/*
 *Resets the memory game so you can start over again
 *A random-function would be nice
 */
function reset() {
    active = 0;
    for (let i = 0; i < cards.length; i++) {
        cardText[i].style.visibility = "hidden";
        cards[i].style.backgroundColor = "blue";
    }
}
/*
 *A listener is added to every memory-card. If a card is clicked the listener gets triggered and responses according to its function-body.
 *
 */
function game() {
    for (let i = 0; i < cardText.length; i += 1) {
        addCardsListener(i);
    }
}
/*
 *Main-functrion containing the algorithm for the game. It is hard to understand for beginners,
 *because it is coded by a beginner.
 */
function addCardsListener(i) {
    var activeCards = [];
    cards[i].addEventListener("click", function () {
        if (active < 2 && cards[i].style.backgroundColor !== "green") {
            cardText[i].style.visibility = "visible";
            cards[i].style.backgroundColor = "red";
            active += 1;
            console.log(active);
        }
        if (cards[i].style.backgroundColor === "green") {
            alert("You already guees that one right!");
        }
        if (active == 2) {
            var j = 0;
            for (let i = 0; i < cards.length; i += 1) {
                if (cards[i].style.backgroundColor === "red") {
                    activeCards[j] = cards[i];
                    console.log(j + 'j');
                    j += 1;
                    if (j > 1) {
                        j = 0;
                    }
                }
            }
            if (activeCards[0].innerHTML == activeCards[1].innerHTML) {
                activeCards[0].style.backgroundColor = "green";
                activeCards[1].style.backgroundColor = "green";
                active = 0;
                found += 1;
                if (found == 8) {
                    alert("Great job!");
                }
            } else if (activeCards[0].innerHTML !== activeCards[1].innerHTML) {
                setTimeout(function () {
                    for (let i = 0; i < 2; i += 1) {
                        activeCards[i].style.backgroundColor = "blue";
                        activeCards[i].childNodes[1].style.visibility = "hidden";
                    }
                }, 750);
                active = 0;
            }
        }
    });
}
