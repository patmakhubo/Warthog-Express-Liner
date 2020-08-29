

function myFunction() {
    var topnav = document.getElementById("myTopnav");
    topnav.className = (topnav.className === "topnav") ? topnav.className + " responsive": "topnav";
}

// Get the input field
var input = document.getElementById("myInput");

// Get the warning text
var text = document.getElementById("text");

// When the user presses any key on the keyboard, run the function
input.addEventListener("keyup", function(event) {

  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("elements must be filled out");
    return false;
  }
}
function frm() {
  //document.frmReg.submit();
  if(getCookie('SuccessMessage').length > 0){
  alert(getCookie('SuccessMessage'));
  }else 
  if(getCookie('ErrorMessage').length > 0){
    alert(getCookie('ErrorMessage'));
  }else {
    alert('No form record submitted');
  }
}

function getCookie(cookieName){
  var name = cookieName + "=";
  var totCookies = document.cookie.split(';');
  for(var i = 0; i < totCookies.length; i++){
    var c = totCookies[i];
    while(c.charAt(0)==' '){
      c = c.substring(1);
      if(c.indexOf(name) == 0){
        var relevantCookie = c.substring(name.length,c.length);
        relevantCookie=relevantCookie.replace('%20', ' ');
        return relevantCookie;
      }
    }
  }
  return "";
}

