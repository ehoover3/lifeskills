// TO DO:  Debug why clicking Dog, Cat, Monkey in the dropdown works once, but not after that
// TO DO:  Randomize where answer images
// TO DO:  Add keypress event for clicking an answer & checking the answer
// TO DO:  Outline the dropbox items that is selected & make it the top option in the dropbox

// CLICK (main_top_subject) --> DROP DOWN BUTTON
function subject_showDropDownClick() {
  subject_dropDownContainer.classList.toggle("show"); // toggle hiding/showing dropdown content
}
// Close dropdown if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropDownContainer")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

// CLICK (dog) --> UPDATE (main_top_subject) INNERHTML
let dogFunctionClick = function () {
  main_top_subject_span.innerHTML = "&#128054;"; // dog emoji
};

// CLICK (cat) --> UPDATE (main_top_subject) INNERHTML
let catFunctionClick = function () {
  main_top_subject_span.innerHTML = "&#128570;"; // cat emoji
};

// CLICK (monkey) --> UPDATE (main_top_subject) INNERHTML
let monkeyFunctionClick = function () {
  main_top_subject_span.innerHTML = "&#128585;"; // monkey emoji
};

// CLICK (plusSign) --> ???
let plusSignFunctionClick = function () {
  return; // TO DO: ADD CODE LATER
};

// CLICK (main_middle_circle2) --> ???
let main_middle_circle2_click = function (event) {
  alert("NEEDS TO LOAD QUIZ GAME.  [WILL ADD CODE LATER]");
  document.body.innerHTML = "";
  addQuizHTML();
  //TO DO: reload scripts for 2variables & 3events
};

// CLICK (main_middle_circle10) --> ???
let main_middle_circle10_click = function (event) {
  alert("NEEDS TO LOAD QUIZ GAME.  [WILL ADD CODE LATER]");
};

// CLICK (quizGame_top_x) --> ???
let quizGame_top_x_click = function (event) {
  alert(
    "Are you sure about that?  All progress in this leson will be lost.  [WILL ADD CODE LATER]"
  );
};

// CLICK (quizGame_middle_answerBox) --> ???
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

// CLICK (quizGame_bottom_skipButton) --> ???
let quizGame_bottom_skipButton_click = function (event) {
  alert("will add code here later");
};

// CLICK (quizGame_bottom_checkButton) --> ???
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
    progressBar();
  }
};

// TO DO: Rename the below variables to more clearly associate with progressbar
// TO DO: Relocate the below code to "2variables.js"
let i = 1; // progress bar code
let width = 0; // progress bar code
quizGame_top_myBar.style.width = width + "%"; // progress bar code
// END TO DO:

// CLICK (???) --> ???
function progressBar() {
  //  if (i === 0) {
  let setIntervalFX = setInterval(frame, 10); //setInterval(function, milliseconds)

  function frame() {
    switch (i) {
      case 1:
        if (width >= 100 / (myQuestions.length / 1)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 2:
        if (width >= 100 / (myQuestions.length / 2)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 3:
        if (width >= 100 / (myQuestions.length / 3)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 4:
        if (width >= 100 / (myQuestions.length / 4)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 5:
        if (width >= 100 / (myQuestions.length / 5)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 6:
        if (width >= 100 / (myQuestions.length / 6)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 7:
        if (width >= 100 / (myQuestions.length / 7)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 8:
        if (width >= 100 / (myQuestions.length / 8)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 9:
        if (width >= 100 / (myQuestions.length / 9)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 10:
        if (width >= 100 / (myQuestions.length / 10)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 11:
        if (width >= 100 / (myQuestions.length / 11)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 12:
        if (width >= 100 / (myQuestions.length / 12)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 13:
        if (width >= 100 / (myQuestions.length / 13)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 14:
        if (width >= 100 / (myQuestions.length / 14)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
      case 15:
        if (width >= 100 / (myQuestions.length / 15)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          quizGame_top_myBar.style.width = width + "%";
        }
        break;
    }
  }
}

// CLICK LISTENERS
main_top_subject.addEventListener("click", subject_showDropDownClick);

dogContainer.addEventListener("click", dogFunctionClick);
catContainer.addEventListener("click", catFunctionClick);
monkeyContainer.addEventListener("click", monkeyFunctionClick);
plusSignContainer.addEventListener("click", plusSignFunctionClick);

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
