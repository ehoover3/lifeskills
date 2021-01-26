// TO DO:  Fix the hover over the check turning green without clicking on an answerbox

// GLOBAL VARIABLES - PART 1 OF 3 (HTML VARIABLES)
let quizGame = document.querySelector(".quizGame");
let top_x = document.querySelector(".top_x");
let top_progressBar = document.querySelector(".top_progressBar");
let top_progressBar_percentComplete = document.querySelector(
  ".top_progressBar_percentComplete"
);
let top_hearts = document.querySelector(".top_hearts");
let middle_question = document.querySelector(".middle_question");
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
// GLOBAL VARIABLES - PART 2 OF 3 (CSS VARIABLES)
let isAnswerBoxClicked = false;

// CLICK EVENT - PART 1 OF 2
let top_x_click = function (event) {
  alert("will add code here later");
};
let top_hearts_click = function (event) {
  alert("will add code here later");
};
let middle_answerBox_click = function (event) {
  let answerBox = event.currentTarget;
  if (
    answerBox === middle_answer1 ||
    answerBox === middle_answer2 ||
    answerBox === middle_answer3 ||
    answerBox === middle_answer4
  ) {
    middle_answer1.style.backgroundColor = "#f7f7f7"; // POLAR
    middle_answer2.style.backgroundColor = "#f7f7f7"; // POLAR
    middle_answer3.style.backgroundColor = "#f7f7f7"; // POLAR
    middle_answer4.style.backgroundColor = "#f7f7f7"; // POLAR
    answerBox.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    bottom_checkButton.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    bottom_checkButton_text.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    isAnswerBoxClicked = true;
  }
};
let bottom_skipButton_click = function (event) {
  alert("will add code here later");
};

// MOUSEOVER EVENTS - PART 1 OF 1
let middle_answerBox_mouseOver = function (event) {
  let answerBox = event.currentTarget;
  // answer box
  if (answerBox.style.backgroundColor !== "rgb(88, 204, 2)") {
    // rgb(88, 204, 2) === FEATHER GREEN
    answerBox.style.backgroundColor = "#afafaf"; // HARE
  }
};
let bottom_checkBox_mouseOver = function (event) {
  let checkBox = event.currentTarget;
  // answer box
  //  if (checkBox.style.backgroundColor === "rgb(88, 204, 2)") {
  if (isAnswerBoxClicked === true) {
    // rgb(88, 204, 2) === FEATHER GREEN
    bottom_checkButton.style.backgroundColor = "#89e219"; // MASK GREEN
    bottom_checkButton_text.style.backgroundColor = "#89e219"; // MASK GREEN
  }
};

// MOUSEOUT EVENT - PART 1 OF 1
let middle_answerBox_mouseOut = function (event) {
  let answerBox = event.currentTarget;
  if (answerBox.style.backgroundColor !== "rgb(88, 204, 2)") {
    // rgb(88, 204, 2) === FEATHER GREEN
    answerBox.style.backgroundColor = "#f7f7f7"; // POLAR
  }
};
let bottom_checkBox_mouseOut = function (event) {
  let checkBox = event.currentTarget;
  // answer box
  if (isAnswerBoxClicked === true) {
    bottom_checkButton.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    bottom_checkButton_text.style.backgroundColor = "#58cc02"; // FEATHER GREEN
  }
};

// CLICK LISTENER - PART 1 OF 2
top_x.addEventListener("click", top_x_click);
top_hearts.addEventListener("click", top_hearts_click);
middle_answer1.addEventListener("click", middle_answerBox_click);
middle_answer2.addEventListener("click", middle_answerBox_click);
middle_answer3.addEventListener("click", middle_answerBox_click);
middle_answer4.addEventListener("click", middle_answerBox_click);
bottom_skipButton.addEventListener("click", bottom_skipButton_click);

// MOUSEOVER LISTENER - PART 1 OF 1
middle_answer1.addEventListener("mouseover", middle_answerBox_mouseOver);
middle_answer2.addEventListener("mouseover", middle_answerBox_mouseOver);
middle_answer3.addEventListener("mouseover", middle_answerBox_mouseOver);
middle_answer4.addEventListener("mouseover", middle_answerBox_mouseOver);
bottom_checkButton.addEventListener("mouseover", bottom_checkBox_mouseOver);

// MOUSEOUT LISTENER - PART 1 OF 1
middle_answer1.addEventListener("mouseout", middle_answerBox_mouseOut);
middle_answer2.addEventListener("mouseout", middle_answerBox_mouseOut);
middle_answer3.addEventListener("mouseout", middle_answerBox_mouseOut);
middle_answer4.addEventListener("mouseout", middle_answerBox_mouseOut);
bottom_checkButton.addEventListener("mouseout", bottom_checkBox_mouseOut);
