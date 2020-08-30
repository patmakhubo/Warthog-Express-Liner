var errorMessage = "";
var validMessage = "";
var submit = 0;
function validContactUs() {
    errorMessage = "";
    validMessage = "";
    submit = 0;
    validateName();
    validateEmail();
    validateNumber();
    validatesubject();
    if (submit == 0) {
        alert("The following information has been submitted:\n" + validMessage);
    } else {
        alert(errorMessage);
    }
}

function validateName() {
    var fname = frmContacts.fname.value
    if (fname == "") {
        errorMessage += "Enter your full name (i.e. Jane Doe)\n";
        document.getElementById("fname").style.backgroundColor = "red";
        submit += 1;
    } else {
        validMessage += "Full Name: " + fname;
        document.getElementById("fname").style.backgroundColor = "";
    }
}

function validateEmail() {
    var email = frmContacts.email.value;
    var check = email.search(/^\S+@\S+\.\S+$/);
    if (check != 0) {
        errorMessage += "Enter a valid email address \n";
        document.getElementById("email").style.backgroundColor = "red";
        submit += 1;
    } else {
        validMessage += "\nEmail Address: " + email;
        document.getElementById("email").style.backgroundColor = "";
    }
}

function validateNumber() {
    var checkNumbers = frmContacts.number.value;
    var validity = checkNumbers.search(/^[0-9]\d{9}$/);
    if (validity == 0 && checkNumbers.charAt(0) == '0') {
        validMessage += "\nMobile Number: " + checkNumbers;
        document.getElementById("number").style.backgroundColor = "";
    } else {
        errorMessage += "Enter a valid mobile numebr \n";
        document.getElementById("number").style.backgroundColor = "red";
        submit += 1;
    }
}

function validatesubject() {
    var mess = frmContacts.subject.value;
    if (mess == "") {
        errorMessage += "Enter a subject.\n";
        document.getElementById("subject").style.backgroundColor = "red";
        submit += 1;
    } else {
        validMessage += "\nsubject: " + mess.substring(0, 15) + "...";
        document.getElementById("subject").style.backgroundColor = "";
    } 
}


function validatTitle() {
    var selection = "";
    var totOptions = frmContacts.Country.length;
    for (var i = 0; i < totOptions; i++) {
        if(frmContacts.Country[i].selected) {
            selection = frmContacts.Country[i].value;
            break;
        }
    }
    if (selection == "Select") {
        errorMessage += "Select a country.\n";
        document.getElementById("Country").style.backgroundColor = "red";
        submit += 1;
    } else {
        validMessage += "\nCountry: " + selection;
        document.getElementById("Country").style.backgroundColor = "";
    }
}