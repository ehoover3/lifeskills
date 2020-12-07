// HAMBUGER MENU
// HEADER
// NAVIGATION BAR
// SIDE BAR

// HAMBURGER MENU
function hamburgerFunction(x) {
  x.classList.toggle("hamburgerChange");
}
// END HAMBURGER MENU

// HEADER - RANDOM AFFIRMING PHRASE UPON PAGE LOAD
arrayOfPhrases = [
  "If opportunity doesn't knock, build a door",
  "Nothing ever goes away until it teaches us what we need to know",
  "Be yourself - everyone else is taken",
  "Talk to yourself like you'd talk to someone you love",
  "When you try to rescue someone, you prevent their learning",
  "Healthy boundaries protect what you value and filter out harm",
  "Comparison is the thief of joy",
  "Kindness if finding another way of being yourself without harming others",
  "When I accept myself, I am freed from the burden of needing you to accept me",
];
let number = Math.floor(Math.random() * arrayOfPhrases.length); // randomly select a number
let assignedPhrase = arrayOfPhrases[number];
let element = document.getElementById("rando"); // connects to the place where the HTML is
element.innerText = assignedPhrase;
// END HEADER - RANDOM AFFIRMING PHRASE UPON PAGE LOAD

// NAVIGATION BAR
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// END NAVIGATION BAR

// SIDE BAR
function sidebar_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function sidebar_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
// END SIDE BAR
