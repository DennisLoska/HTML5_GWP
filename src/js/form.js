function validateForm() {
    var age = document.forms["surveyForm"]["age"].value;
    var firstName = document.forms["surveyForm"]["firstName"].value;
    var lastName = document.forms["surveyForm"]["lastName"].value;
    var name = firstName + " " + lastName;
    var gender = document.forms["surveyForm"]["gender"].value;
    var grade = document.forms["surveyForm"]["grade"].value;
    var feedBack = document.forms["surveyForm"]["feedBack"].value;

    validateName(name);




    alert("Vielen dank für deine Teilnahme!");
}

function validateName(name) {

    alert(name.search(/[a-zA-Z]{1,30}/g));


}
