"use strict";

function validateFeedBack(feedBack) {
    if (feedBack === "") {
        alert("Bitte lassen Sie uns mehr über Ihre Meinung erfahren");
        document.getElementById("feedBack").focus();
    }
}

function validateGrade(grade) {
    var gradeText;
    if (grade === 5) {
        gradeText = "Vielen Dank für Ihre bewertung";
        alert(gradeText);
    } else if (grade < 5) {
        gradeText = "Wir hoffen, dass wir unseren Blog so verbessern, dmamit er auch Ihnen gefällt!";
        alert(gradeText);
    } else if (grade > 5) {
        gradeText = "Wir freuen uns sehr, dass Ihnen unser Blog gefällt!";
        alert(gradeText);
    }
}

function validateGender(gender) {
    if (gender === "") {
        alert("Bitte wählen Sie Ihr Geschlecht aus!");
        return false;
    } else if (gender === "male" || gender === "female") {
        return true;
    }
}

function validateAge(age, regexAge) {
    if (age < 5 || age > 130) {
        alert("Bitte gib dein richtiges Alter an!");
        document.getElementById("age").focus();
        return false;
    } else if (regexAge.test(age)) {
        alert("Buchstaben sind bei der Altersangabe nicht zulässig.");
        return false;
    } else {
        return true;
    }
}

function ageValid(age, regexAge) {
    if (age < 5 || age > 130) {
        document.getElementById("age").focus();
        return false;
    } else if (regexAge.test(age)) {
        return false;
    } else {
        return true;
    }
}

function validateFirstName(firstName, regex) {
    if (firstName === "") {
        alert("Bitte gib deinen Vornamen an!");
        document.getElementById("firstName").focus();
        return false;
    } else if (regex.test(firstName)) {
        alert("Zahlen sind im Voramen nicht zulässig.");
        return false;
    } else {
        return true;
    }
}

function validateLastName(lastName, regex) {
    if (lastName === "") {
        alert("Bitte gib deinen Nachnamen an!");
        document.getElementById("lastName").focus();
        return false;
    } else if (regex.test(lastName)) {
        alert("Zahlen sind im Nachnamen sind nicht zulässig.");
        return false;
    } else {
        return true;
    }
}

function validateName(name, regex) {
    if (name === "") {
        return false;
    } else if (regex.test(name)) {
        return false;
    } else {
        return true;
    }
}

function validateForm() {
    var age = document.forms["surveyForm"]["age"].value;
    var firstName = document.forms["surveyForm"]["firstName"].value;
    var lastName = document.forms["surveyForm"]["lastName"].value;
    var name = firstName + " " + lastName;
    var gender = document.forms["surveyForm"]["gender"].value;
    var grade = document.forms["surveyForm"]["grade"].value;
    var feedBack = document.forms["surveyForm"]["feedBack"].value;
    var regex = /\d/;
    var regexAge = /[a-zA-Z]+/g;

    validateFeedBack(feedBack);
    validateGrade(grade);
    validateFirstName(firstName, regex);
    validateLastName(lastName, regex);
    validateName(name, regex);
    validateAge(age, regexAge);
    validateGender(gender);

    /*
    console.log(validateName(name, regex));
    console.log(validateAge(age, regexAge));
    */
    if (validateName(name, regex) && ageValid(age, regexAge)) {
        //...do stuff to unlock games
        var parentElement = document.getElementsByTagName("main")[0];
        var bodyChild = document.getElementById("surveySection");
        var memoryLink = document.createElement("p");
        var breakoutLink = document.createElement("p");
        var memory = document.createElement("a");
        var breakout = document.createElement("a");

        memoryLink.appendChild(memory);
        breakoutLink.appendChild(breakout);

        memoryLink.className += "gamelink";
        breakoutLink.className += "gamelink";

        memory.setAttribute("href", "../memory_1.html");
        breakout.setAttribute("href", "../canvas.html");

        memory.innerHTML = "Play Memory!";
        breakout.innerHTML = "Play Breakout!";

        parentElement.insertBefore(memoryLink, bodyChild);
        parentElement.insertBefore(breakoutLink, bodyChild);

        alert("Vielen dank für deine Teilnahme. Die Spiele sind jetzt freigeschaltet, siehe oben!");
        return false;
    } else {
        alert("Bitte fülle das Formular richtig aus!");
        return false;
    }
}
