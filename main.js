// Initialize Firebase
const config = {
  apiKey: "AIzaSyD28glXreDOiRqyvjqi_04X38DTNNrgxtw",
  authDomain: "web-application-9e17e.firebaseapp.com",
  databaseURL: "https://web-application-9e17e.firebaseio.com",
  projectId: "web-application-9e17e",
  storageBucket: "web-application-9e17e.appspot.com",
  messagingSenderId: "923554325193"
};
firebase.initializeApp(config);


var onPage = false;
var email = document.getElementById('email');
var password = document.getElementById('password');
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
const logoutBtn = document.getElementById('logout');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
var labels = document.getElementById('formLabels');
var positions = [];


$(document).ready(function() {

  if (sPage == "webratzMaps.html") {

    //$("h2").css("color", "blue");




  }
});


loginBtn.addEventListener('click', e => {
  const email = getInputVal('email');
  const password = getInputVal('password');
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, password);

  promise.catch(e => {
    alert("Incorrect Username and/or password");
    console.log(e.message);
  });
});

registerBtn.addEventListener('click', e => {
  //TODO: check for real email
  const email = getInputVal('email');
  const password = getInputVal('password');
  const auth = firebase.auth();
  if (password.length < 6) {
    alert("Please Enter a Password with 6+ characters");
  }
  const promise = auth.createUserWithEmailAndPassword(email, password);

  promise.catch(e => console.log(e.message));
});

logoutBtn.addEventListener('click', e => {
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    email.setAttribute("style", "display: none");
    password.setAttribute("style", "display: none");
    logoutBtn.setAttribute("style", "display: inline-block");
    loginBtn.setAttribute("style", "display: none");
    $(".formLabels").css("display", "none");
    $("#register").css("display", "none")
    console.log(sPage);
    if (sPage == "index.html") {
      window.location = "webratzMaps.html";
    }

  } else {
    console.log("not logged in");
    email.setAttribute("style", "display: inline-block");
    password.setAttribute("style", "display: inline-block");
    logoutBtn.setAttribute("style", "display: none");
    loginBtn.setAttribute("style", "display: inline-block");
    if (sPage != "index.html") {
      window.location = "index.html";
    }
  }
});

//auth.signInWithEmailAndPassword(email, password);
//auth.createUserWithEmailAndPassword(email, password);




//function to get the form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
