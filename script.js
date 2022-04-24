//STICKY NAVBAR
window.addEventListener('scroll', function(){
    const header = document.querySelector('nav');
    header.classList.toggle("sticky", window.scrollY > 200);
});

//MENU
function showMenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
}
function hideMenu(){
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
}

//FORM VALIDATION
function validateName() {

    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {

      producePrompt('Name is required', 'name-error' , 'red')
      return false;

  }

  if (!name.match(/([A-Z]{1})([a-z]+)/)) {

      producePrompt('First and last name, please.','name-error', 'red');
      return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}


function validateEmail () {

var email = document.getElementById('contact-email').value;

if(email.length == 0) {

  producePrompt('Email Invalid','email-error', 'red');
  return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

  producePrompt('Email Invalid', 'email-error', 'red');
  return false;

}

producePrompt('Valid', 'email-error', 'green');
return true;

}

function validateMessage() {
var message = document.getElementById('contact-message').value;
var required = 30;
var left = required - message.length;

if (left > 0 & message == [0-9]) {
  producePrompt(left + ' more characters required','message-error','red');
  return false;
}

producePrompt('Valid', 'message-error', 'green');
return true;

}

function validateForm() {
if (!validateName()  || !validateEmail() || !validateMessage()) {
  jsShow('submit-error');
  producePrompt('Please fix errors to submit.', 'submit-error', 'red');
  setTimeout(function(){jsHide('submit-error');}, 2000);
  return false;
}
else {
 window.open("poslato.html", "_blank");
}
}

function jsShow(id) {
document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

document.getElementById(promptLocation).innerHTML = message;
document.getElementById(promptLocation).style.color = color;

}

//BACK TO TOP BUTTON
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  mybutton = document.getElementById("myBtn");
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
