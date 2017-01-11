function validateForm() {
    var age = document.forms["surveyForm"]["age"].value;
    var firstName = document.forms["surveyForm"]["firstName"].value;
    var lastName = document.forms["surveyForm"]["lastName"].value;
    var name = firstName + " " + lastName;
    var gender = document.forms["surveyForm"]["gender"].value;
    var grade = document.forms["surveyForm"]["grade"].value;
    var feedBack = document.forms["surveyForm"]["feedBack"].value;

    validateAge(age);




    alert("Vielen dank für deine Teilnahme!");
}

function validateAge(age) {

    alert(age.search(/[1-120]{1,3}/));

}
