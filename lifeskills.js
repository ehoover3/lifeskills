function myFunction(x) {
  x.classList.toggle("change");
}

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

// SIDE BAR

// END SIDE BAR
