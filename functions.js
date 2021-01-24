// EDUCATION:  Facial Recognition & Conversation AI

// TO DO:  Make Quiz Function with pagination
// TO DO:  Make screen - load screen with random quote
// TO DO:  Make screen - lessons
// TO DO:  Make screen - stories
// TO DO:  Make screen - profile
// TO DO:  Make screen - league
// TO DO:  Make screen - shop (able to buy a house, clothes & other things for profile)
// TO DO:  Make Camera able to read user's nonverbals & identify emotions
// facial recognition, then full body
// TO DO:  Make Camera able to match identified nonverbal with similar images (i.e. donald duck frowning face)

// GLOBAL VARIABLES
let quizGame = document.querySelector(".quizGame");
let top_x = document.querySelector(".top_x");
let top_progressBar = document.querySelector(".top_progressBar");
let top_progressBar_percentComplete = document.querySelector(
  ".top_progressBar_percentComplete"
);
let top_hearts = document.querySelector(".top_hearts");
let middle_instructions = document.querySelector(".middle_instructions");
let middle_answer1 = document.querySelector(".middle_answer1");
let middle_answer1_image = document.querySelector(".middle_answer1_image");
let middle_answer1_text = document.querySelector(".middle_answer1_text");
let middle_answer2 = document.querySelector(".middle_answer2");
let middle_answer2_image = document.querySelector(".middle_answer2_image");
let middle_answer2_text = document.querySelector(".middle_answer2_text");
let middle_answer3 = document.querySelector(".middle_answer3");
let middle_answer3_image = document.querySelector(".middle_answer3_image");
let middle_answer3_text = document.querySelector(".middle_answer3_text");
let middle_answer4 = document.querySelector(".middle_answer4");
let middle_answer4_image = document.querySelector(".middle_answer4_image");
let middle_answer4_text = document.querySelector(".middle_answer4_text");
let bottom_skipButton = document.querySelector(".bottom_skipButton");
let bottom_skipButton_text = document.querySelector(".bottom_skipButton_text");
let bottom_checkButton = document.querySelector(".bottom_checkButton");
let bottom_checkButton_text = document.querySelector(
  ".bottom_checkButton_text"
);

// CLICK EVENT
let answerBox_click = function (event) {
  let answerBox = event.currentTarget;
  middle_answer1.style.backgroundColor = "#f7f7f7"; // POLAR
  middle_answer2.style.backgroundColor = "#f7f7f7"; // POLAR
  middle_answer3.style.backgroundColor = "#f7f7f7"; // POLAR
  middle_answer4.style.backgroundColor = "#f7f7f7"; // POLAR
  answerBox.style.backgroundColor = "#58cc02"; // FEATHER GREEN
  bottom_checkButton.style.backgroundColor = "#58cc02"; // FEATHER GREEN
  bottom_checkButton_text.style.backgroundColor = "#58cc02"; // FEATHER GREEN
};

// MOUSEOVER EVENTS
let answerBox_mouseOver = function (event) {
  let answerBox = event.currentTarget;
  // answer box
  if (answerBox.style.backgroundColor !== "rgb(88, 204, 2)") {
    // rgb(88, 204, 2) === FEATHER GREEN
    answerBox.style.backgroundColor = "#afafaf"; // HARE
  }

  // #89e219; // MASK GREEN
};

let checkBox_mouseOver = function (event) {
  let checkBox = event.currentTarget;
  // answer box
  if (checkBox.style.backgroundColor === "rgb(88, 204, 2)") {
    // rgb(88, 204, 2) === FEATHER GREEN
    bottom_checkButton.style.backgroundColor = "#89e219"; // MASK GREEN
    bottom_checkButton_text.style.backgroundColor = "#89e219"; // MASK GREEN
  }
};

// MOUSEOUT EVENT
let answerBox_mouseOut = function (event) {
  let answerBox = event.currentTarget;

  // answer box
  if (answerBox.style.backgroundColor !== "rgb(88, 204, 2)") {
    // rgb(88, 204, 2) === FEATHER GREEN
    answerBox.style.backgroundColor = "#f7f7f7"; // POLAR
  }

  // #89e219; // MASK GREEN
};

let checkBox_mouseOut = function (event) {
  let checkBox = event.currentTarget;
  // answer box
  if (checkBox.style.backgroundColor !== "rgb(88, 204, 2)") {
    // rgb(88, 204, 2) === FEATHER GREEN
    bottom_checkButton.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    bottom_checkButton_text.style.backgroundColor = "#58cc02"; // FEATHER GREEN
  }
};

// CLICK LISTENER
middle_answer1.addEventListener("click", answerBox_click);
middle_answer2.addEventListener("click", answerBox_click);
middle_answer3.addEventListener("click", answerBox_click);
middle_answer4.addEventListener("click", answerBox_click);
bottom_checkButton.addEventListener("click", answerBox_click);
// MOUSEOVER LISTENER
middle_answer1.addEventListener("mouseover", answerBox_mouseOver);
middle_answer2.addEventListener("mouseover", answerBox_mouseOver);
middle_answer3.addEventListener("mouseover", answerBox_mouseOver);
middle_answer4.addEventListener("mouseover", answerBox_mouseOver);
bottom_checkButton.addEventListener("mouseover", checkBox_mouseOver);
// MOUSEOUT LISTENER
middle_answer1.addEventListener("mouseout", answerBox_mouseOut);
middle_answer2.addEventListener("mouseout", answerBox_mouseOut);
middle_answer3.addEventListener("mouseout", answerBox_mouseOut);
middle_answer4.addEventListener("mouseout", answerBox_mouseOut);
bottom_checkButton.addEventListener("mouseout", checkBox_mouseOut);
