'use strict';

var returnValue = false;

function validateForm() {
    var age = document.forms["surveyForm"]["age"].value;
    var firstName = document.forms["surveyForm"]["firstName"].value;
    var lastName = document.forms["surveyForm"]["lastName"].value;
    var name = firstName + " " + lastName;
    var gender = document.forms["surveyForm"]["gender"].value;
    var grade = document.forms["surveyForm"]["grade"].value;
    var feedBack = document.forms["surveyForm"]["feedBack"].value;

    validateAge(age);
    validateFeedBack(feedBack);
    validateGrade(grade);
    validateFirstName(firstName);
    validateLastName(lastName);
    validateName(name);
    validateGender(gender);
    alert("Vielen dank für deine Teilnahme ");
}

function validateFeedBack(feddBack) {
    if (feddBack == "") {
        alert("Bitte lassen Sie uns mehr über Ihre Meinung erfahren");
        document.getElementById("feedBack").focus();
        returnValue = false;
    }
    else returnValue = true;
    return returnValue;
}

function validateGrade(grade) {
    var gradeText;
    if (grade == 5) {
        gradeText = "Vielen Dank für Ihre bewertung";
        alert(gradeText);
        returnValue = false;
    }
    else if (grade < 5) {
        gradeText = "Wir hoffen, dass wir unseren Blog so verbessern, dmamit er auch Ihnen gefällt!";
        alert(gradeText);
        returnValue = false;
    }
    else if (grade > 5) {
        gradeText = "Wir frueen uns sehr, dass Ihnen unser Blog gefällt!";
        alert(gradeText);
        returnValue = true;
    }
    return returnValue;
}

function validateGender(gender) {
    if (gender == "") {
        alert("Bitte wählen Sie Ihr Geschlecht aus!");
        returnValue = false;
    }
    else if (gender == "male" || gender == "female") {
        returnValue = true;
    }
    return returnValue;
}

function validateAge(age) {
    if (age < 5 || age > 130) {
        alert("Bitte geben Sie Ihr richtiges Alter an!");
        document.getElementById("age").focus();
        returnValue = false;
    }
    else returnValue = true;
    return returnValue;
}

function validateFirstName(firstName) {
    if (firstName == "") {
        alert("Bitte gib deinen Vornamen an!");
        document.getElementById("firstName").focus();
        returnValue = false;
    }
    else returnValue = true;
    return returnValue;
}

function validateLastName(lastName) {
    if (lastName == "") {
        alert("Bitte gib deinen Nachnamen an!");
        document.getElementById("lastName").focus();
        returnValue = false;
    }
    else returnValue = true;
    return returnValue;
}

function validateName(name) {
    if (name == "") {
        alert("Geben Sie Ihren Vor- und Nachnamen an!");
        returnValue = false;
    }
    else returnValue = true;
    return returnValue;
}
