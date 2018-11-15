let landingPage = document.getElementsByClassName("landing-page")[0];
let registrationBackground = document.getElementById("signup-modal");
let loginBackground = document.getElementById("login-modal");

let btnLogin = document.getElementById("btn-login");
let btnSignUp = document.getElementById("btn-signup");

let span = document.getElementById("close-signup");
let loginSpan = document.getElementById("close-login");

let modalChange1 = document.getElementById("change-modals1");
let modalChange2 = document.getElementById("change-modals2");

restoreBtnDisplay = function() {
  btnSignUp.style.display = "inline-block";
  btnLogin.style.display = "inline-block";
}

removeBtnDisplay = function() {
  btnSignUp.style.display = "none";
  btnLogin.style.display = "none";
}

btnSignUp.onclick = function() {
  removeBtnDisplay();
  registrationBackground.style.display = "inline-block";
}

btnLogin.onclick = function() {
  removeBtnDisplay();
  loginBackground.style.display = "inline-block";
}



span.onclick = function() {
  registrationBackground.style.display = "none";
  restoreBtnDisplay();
}

loginSpan.onclick = function() {
  loginBackground.style.display = "none";
  restoreBtnDisplay();
}

window.onclick = function(event) {
  if (event.target == registrationBackground) {
    registrationBackground.style.display = "none";
    restoreBtnDisplay();
  }
  if (event.target == loginBackground) {
    loginBackground.style.display = "none";
    restoreBtnDisplay();
  }
}

modalChange1.onclick = function() {
  registrationBackground.style.display = "none";
  loginBackground.style.display = "inline-block";
}

modalChange2.onclick = function() {
  loginBackground.style.display = "none";
  registrationBackground.style.display = "inline-block";
}