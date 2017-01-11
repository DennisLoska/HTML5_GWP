function validateForm() {
    var age = document.forms["surveyForm"]["age"].value;
    var firstName = document.forms["surveyForm"]["firstName"].value;
    var lastName = document.forms["surveyForm"]["lastName"].value;
    var name = firstName + " " + lastName;
    var gender = document.forms["surveyForm"]["gender"].value;
    var grade = document.forms["surveyForm"]["grade"].value;
    var feedBack = document.forms["surveyForm"]["feedBack"].value;


    //checking, weither field is empty or not
    if (name == false)
        return alert("Name can´t be empty!");
    //checking age
    if (age >= 18) {
        isAdult = true;
    } else if (age < 18) {
        isAdult = false;
    }
    //checking name
    for (var i = 0; i < 10; i++) {
        if (name.search(i) == true) {
            return false;
        } else return true;
    }



    //checking grade
    if (grade > 5) {
        var isHappy = true;
    } else if (grade <= 5) {
        isHappy = false;
    }




    alert("Vielen dank für deine Teilnahme!");
}
