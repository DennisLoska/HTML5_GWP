function validateForm() {
    var age = document.forms["surveyForm"]["age"].value;
    var firstName = document.forms["surveyForm"]["firstName"].value;
    var lastName = document.forms["surveyForm"]["lastName"].value;
    var name = firstName + " " + lastName;
    var gender = document.forms["surveyForm"]["gender"].value;
    var grade = document.forms["surveyForm"]["grade"].value;
    var feedBack = document.forms["surveyForm"]["feedBack"].value;

    validateFirstName(firstName);
    validateLastName(lastName);
    validateName(name);
    alert("Vielen dank für deine Teilnahme!");
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

//checks empty vorname


function validateName(name) {
    if (name == "") {
        alert("Geben Sie Ihren Vor- und Nachnamen an!");
        return false;
    }
