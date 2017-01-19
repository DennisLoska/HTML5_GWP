'use strict'

function validateForm() {
    var age = document.forms["surveyForm"]["age"].value;
    var firstName = document.forms["surveyForm"]["firstName"].value;
    var lastName = document.forms["surveyForm"]["lastName"].value;
    var name = firstName + " " + lastName;
    var gender = document.forms["surveyForm"]["gender"].value;
    var grade = document.forms["surveyForm"]["grade"].value;
    var feedBack = document.forms["surveyForm"]["feedBack"].value;

    validateFeedBack(feedBack);
    validateGrade(grade);
    validateGender(gender);
    validateAge(age);
    validateFirstName(firstName);
    validateLastName(lastName);
    validateName(name);
    alert("Vielen dank für deine Teilnahme!");
}

function validateFeedBack(feddBack) {
    if (feddBack == "")
        alert("Bitte lassen Sie uns mehr über Ihre Meinung erfahren");
    document.getElementById("feedBack").focus();
    return false;
}

function validateGrade(grade) {
    if (grade == 5)
        alert("Vielen Dank für Ihre Teilnahme.");
    else if (grade < 5)
        alert("Wir hoffen, dass wir unseren Blog so verbessern, dmamit er auch Ihnen gefällt!");
    else if (grade > 5)
        alert("Wir frueen uns sehr, dass Ihnen unser Blog gefällt!");
}

function validateGender(gender) {
    if (gender == "")
        alert("Bitte wählen Sie Ihr Geschlecht aus!");
    return false;
}

function validateAge(age) {
    if (age < 5 || age > 130)
        alert("Bitte geben Sie Ihr richtiges Alter an!");
    document.getElementById("age").focus();
    return false;
}

function validateFirstName(firstName) {
    //checks empty nachname
    if (firstName == "")
        alert("Bitte gib deinen Vornamen an!");
    document.getElementById("firstName").focus();
    return false;
}

function validateLastName(lastName) {
    if (lastName == "")
        alert("Bitte gib deinen Nachnamen an!");
    document.getElementById("lastName").focus();
    return false;
}

function validateName(name) {
    if (name == "")
        alert("Geben Sie Ihren Vor- und Nachnamen an!");
    return false;
}
