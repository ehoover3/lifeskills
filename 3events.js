// TO DO:  Randomize where answer images

let i = 0;
let myBar = document.getElementById("myBar");

function move() {
  if (i === 0) {
    i = 1;
    let width = 1;
    let id = setInterval(frame, 10); //setInterval(function, milliseconds)

    function frame() {
      if (width >= 100) {
        i = 0;
        clearInterval(id); //clearInterval stops the setInterval function
      } else {
        width++;
        myBar.style.width = width + "%";
      }
    }
  }
}

// EVENTS for CLICK
let main_middle_circle2_click = function (event) {
  alert("NEEDS TO LOAD QUIZ GAME.  [WILL ADD CODE LATER]");
  document.body.innerHTML = "";
  addQuizHTML();
  //reload scripts for 2variables & 3events

  // function reloadJs(src1) {
  //   src = $('script[src$="' + src1 + '"]').attr("src");
  //   $('script[src$="' + src1 + '"]').remove();
  //   $("<script/>").attr("src", src1).appendTo("head");
  // }
  // reloadJs("myFile.js");
};
let main_middle_circle10_click = function (event) {
  alert("NEEDS TO LOAD QUIZ GAME.  [WILL ADD CODE LATER]");
};
let quizGame_top_x_click = function (event) {
  alert(
    "Are you sure about that?  All progress in this leson will be lost.  [WILL ADD CODE LATER]"
  );
};
let quizGame_middle_answerBox_click = function (event) {
  let answerBox = event.currentTarget;
  if (
    answerBox === quizGame_middle_answer1 ||
    answerBox === quizGame_middle_answer2 ||
    answerBox === quizGame_middle_answer3 ||
    answerBox === quizGame_middle_answer4
  ) {
    quizGame_middle_answer1.style.backgroundColor = "#f7f7f7"; // POLAR
    quizGame_middle_answer2.style.backgroundColor = "#f7f7f7"; // POLAR
    quizGame_middle_answer3.style.backgroundColor = "#f7f7f7"; // POLAR
    quizGame_middle_answer4.style.backgroundColor = "#f7f7f7"; // POLAR
    answerBox.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    quizGame_bottom_checkButton.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    quizGame_bottom_checkButton_text.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    isAnswerBoxClicked = true;
  }
};
let quizGame_bottom_skipButton_click = function (event) {
  alert("will add code here later");
};
let quizGame_bottom_checkButton_click = function (event) {
  if (isAnswerBoxClicked === true) {
    questionNumber += 1;
    quizFunctions(questionNumber);
    isAnswerBoxClicked = false; // reset css for next question
    quizGame_middle_answer1.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
    quizGame_middle_answer2.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
    quizGame_middle_answer3.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
    quizGame_middle_answer4.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
    quizGame_bottom_checkButton.style.backgroundColor = "#e5e5e5"; // SWAN // reset css for next question
    quizGame_bottom_checkButton_text.style.backgroundColor = "#e5e5e5"; // SWAN // reset css for next question
  }
};
// *******************************************************************

// EVENTS for MOUSEOVER
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

// *******************************************************************

// EVENTS for MOUSEOUT
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

// *******************************************************************
// *******************************************************************
// *******************************************************************

// LISTENER for CLICK
main_middle_circle2.addEventListener("click", main_middle_circle2_click);
main_middle_circle10.addEventListener("click", main_middle_circle10_click);
quizGame_top_x.addEventListener("click", quizGame_top_x_click);
quizGame_middle_answer1.addEventListener(
  "click",
  quizGame_middle_answerBox_click
);
quizGame_middle_answer2.addEventListener(
  "click",
  quizGame_middle_answerBox_click
);
quizGame_middle_answer3.addEventListener(
  "click",
  quizGame_middle_answerBox_click
);
quizGame_middle_answer4.addEventListener(
  "click",
  quizGame_middle_answerBox_click
);
quizGame_bottom_skipButton.addEventListener(
  "click",
  quizGame_bottom_skipButton_click
);
quizGame_bottom_checkButton.addEventListener(
  "click",
  quizGame_bottom_checkButton_click
);

// LISTENER for MOUSEOVER
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

// LISTENER for MOUSEOUT
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

// *******************************************************************
// *******************************************************************
// *******************************************************************

// UPDATE SCREEN
function quizFunctions(questionNumber) {
  quizGame_middle_question.innerHTML = myQuestions[questionNumber].question;
  quizGame_middle_answer1_image.src = myQuestions[questionNumber].images.a;
  quizGame_middle_answer2_image.src = myQuestions[questionNumber].images.b;
  quizGame_middle_answer3_image.src = myQuestions[questionNumber].images.c;
  quizGame_middle_answer4_image.src = myQuestions[questionNumber].images.d;

  quizGame_middle_answer1_text.innerHTML =
    myQuestions[questionNumber].answers.a;
  quizGame_middle_answer2_text.innerHTML =
    myQuestions[questionNumber].answers.b;
  quizGame_middle_answer3_text.innerHTML =
    myQuestions[questionNumber].answers.c;
  quizGame_middle_answer4_text.innerHTML =
    myQuestions[questionNumber].answers.d;
}

// *******************************************************************
// *******************************************************************
// *******************************************************************

quizFunctions(questionNumber);
