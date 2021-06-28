var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("text").value;
var password = document.getElementById("pass").value;
if ( username == "123" && password == "123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("text").disabled = true;
document.getElementById("pass").disabled = true;
document.getElementById("buttonreg").disabled = true;
return false;
}
}
}