function myFunction() {
    var topnav = document.getElementById("myTopnav");
    topnav.className = (topnav.className === "topnav") ? topnav.className + " responsive": "topnav";
}

// Get the input field
var input = document.getElementById("myInput");

// Get the warning text
var text = document.getElementById("text");

function clearFields() {
  document.getElementById("idnumber").value = '';
  document.getElementById("title-dropdown").value = 'none';
  document.getElementById("firstname").value = '';
  document.getElementById("lastname").value = '';
  document.getElementById("address").value = '';
  document.getElementById("city").value = '';
  document.getElementById("zipCode").value = '';
  document.getElementById("email").value = '';
  document.getElementById("mobile-number").value = '';
  document.getElementById("home-language").value = 'none';
  document.getElementById("additional-language").value = 'none';
  document.getElementById("subject").value = '';
  window.onload = alert("Form cleared, ");
}
