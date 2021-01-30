// MOUSEOVER EVENTS
let quizGame_middle_answerBox_mouseOver = function (event) {
  let answerBox = event.currentTarget;
  // answer box
  if (answerBox.style.backgroundColor !== "rgb(88, 204, 2)") {
    // rgb(88, 204, 2) === FEATHER GREEN
    answerBox.style.backgroundColor = "#afafaf"; // HARE
  }
};
let quizGame_bottom_checkBox_mouseOver = function (event) {
  //  let checkBox = event.currentTarget;
  // answer box
  //  if (checkBox.style.backgroundColor === "rgb(88, 204, 2)") {
  if (isAnswerBoxClicked === true) {
    // rgb(88, 204, 2) === FEATHER GREEN
    quizGame_bottom_checkButton.style.backgroundColor = "#89e219"; // MASK GREEN
    quizGame_bottom_checkButton_text.style.backgroundColor = "#89e219"; // MASK GREEN
  }
};

// MOUSEOVER LISTENER
quizGame_middle_answer1.addEventListener(
  "mouseover",
  quizGame_middle_answerBox_mouseOver
);
quizGame_middle_answer2.addEventListener(
  "mouseover",
  quizGame_middle_answerBox_mouseOver
);
quizGame_middle_answer3.addEventListener(
  "mouseover",
  quizGame_middle_answerBox_mouseOver
);
quizGame_middle_answer4.addEventListener(
  "mouseover",
  quizGame_middle_answerBox_mouseOver
);
quizGame_bottom_checkButton.addEventListener(
  "mouseover",
  quizGame_bottom_checkBox_mouseOver
);

//  MOUSEOUT EVENTS
let quizGame_middle_answerBox_mouseOut = function (event) {
  let answerBox = event.currentTarget;
  if (answerBox.style.backgroundColor !== "rgb(88, 204, 2)") {
    // rgb(88, 204, 2) === FEATHER GREEN
    answerBox.style.backgroundColor = "#f7f7f7"; // POLAR
  }
};
let quizGame_bottom_checkBox_mouseOut = function (event) {
  // let checkBox = event.currentTarget; DELETE??
  // answer box DELETE??
  if (isAnswerBoxClicked === true) {
    quizGame_bottom_checkButton.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    quizGame_bottom_checkButton_text.style.backgroundColor = "#58cc02"; // FEATHER GREEN
  }
};

// MOUSEOUT LISTENER
quizGame_middle_answer1.addEventListener(
  "mouseout",
  quizGame_middle_answerBox_mouseOut
);
quizGame_middle_answer2.addEventListener(
  "mouseout",
  quizGame_middle_answerBox_mouseOut
);
quizGame_middle_answer3.addEventListener(
  "mouseout",
  quizGame_middle_answerBox_mouseOut
);
quizGame_middle_answer4.addEventListener(
  "mouseout",
  quizGame_middle_answerBox_mouseOut
);
quizGame_bottom_checkButton.addEventListener(
  "mouseout",
  quizGame_bottom_checkBox_mouseOut
);
