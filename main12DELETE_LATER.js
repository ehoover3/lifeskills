// CHECK CLICK (quizGame_middle_answerBox) --> ???
let click_q_answerBox = function (event) {
  let answerBox = event.currentTarget;
  if (
    answerBox === q_answer1 ||
    answerBox === q_answer2 ||
    answerBox === q_answer3 ||
    answerBox === q_answer4
  ) {
    q_answer1.style.backgroundColor = "#f7f7f7"; // POLAR
    q_answer2.style.backgroundColor = "#f7f7f7"; // POLAR
    q_answer3.style.backgroundColor = "#f7f7f7"; // POLAR
    q_answer4.style.backgroundColor = "#f7f7f7"; // POLAR
    answerBox.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    q_checkButton.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    q_checkButton_text.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    isAnswerBoxClicked = true;
  }
};

// CHECK CLICK (quizGame_bottom_checkButton) --> ???
let click_q_checkButton = function (event) {
  if (isAnswerBoxClicked === true) {
    questionNumber += 1;
    if (questionNumber < quizData.length) {
      // guard clause to do all the questions in the set
      quizFunctions(questionNumber);
      isAnswerBoxClicked = false; // reset css for next question
      q_answer1.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
      q_answer2.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
      q_answer3.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
      q_answer4.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
      q_checkButton.style.backgroundColor = "#e5e5e5"; // SWAN // reset css for next question
      q_checkButton_text.style.backgroundColor = "#e5e5e5"; // SWAN // reset css for next question
      progressBar();
    } else if (questionNumber === quizData.length) {
      alert("ADD CODE LATER - QUIZ COMPLETE!"); // THINK:  put quiz click inside of a class structure... only is triggered by event handler
    }
  }
};

// QUIZ CLICK
function q_listeners() {
  let i = 1; // progress bar code
  let width = 0; // progress bar code
  q_myBar.style.width = width + "%"; // progress bar code

  let setIntervalFX = setInterval(frame, 10); //setInterval(function, milliseconds)

  function frame() {
    switch (i) {
      case 1:
        if (width >= 100 / (quizData.length / 1)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 2:
        if (width >= 100 / (quizData.length / 2)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 3:
        if (width >= 100 / (quizData.length / 3)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 4:
        if (width >= 100 / (quizData.length / 4)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 5:
        if (width >= 100 / (quizData.length / 5)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 6:
        if (width >= 100 / (quizData.length / 6)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 7:
        if (width >= 100 / (quizData.length / 7)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 8:
        if (width >= 100 / (quizData.length / 8)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 9:
        if (width >= 100 / (quizData.length / 9)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 10:
        if (width >= 100 / (quizData.length / 10)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 11:
        if (width >= 100 / (quizData.length / 11)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 12:
        if (width >= 100 / (quizData.length / 12)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 13:
        if (width >= 100 / (quizData.length / 13)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 14:
        if (width >= 100 / (quizData.length / 14)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
      case 15:
        if (width >= 100 / (quizData.length / 15)) {
          i += 1;
          clearInterval(setIntervalFX); //clearInterval stops the setInterval function
        } else {
          width++;
          q_myBar.style.width = width + "%";
        }
        break;
    }
  }
}

// QUIZ LISTENERS
q_exit.addEventListener("click", click_q_exit);
q_answer1.addEventListener("click", click_q_answerBox);
q_answer2.addEventListener("click", click_q_answerBox);
q_answer3.addEventListener("click", click_q_answerBox);
q_answer4.addEventListener("click", click_q_answerBox);
q_skipButton.addEventListener("click", click_q_skipButton);
q_checkButton.addEventListener("click", click_q_checkButton);

// GLOBAL VARIABLES - QUIZ
let q_exit = document.querySelector(".q_exit");
let q_myBar = document.querySelector(".q_myBar");
let q_question = document.querySelector(".q_question");
let q_answer1 = document.querySelector(".q_answer1");
let q_answer2 = document.querySelector(".q_answer2");
let q_answer3 = document.querySelector(".q_answer3");
let q_answer4 = document.querySelector(".q_answer4");
let q_skipButton = document.querySelector(".q_skipButton");
let q_checkButton = document.querySelector(".q_checkButton");
let q_checkButton_text = document.querySelector(".q_checkButton_text");

// GLOBAL VARIABLES - PART 2 OF 3 (CSS VARIABLES)
let isAnswerBoxClicked = false;

// MOUSEOVER EVENTS
let q_answerBox_mouseOver = function (event) {
  let answerBox = event.currentTarget;
  if (answerBox.style.backgroundColor !== "rgb(88, 204, 2)") {
    answerBox.style.backgroundColor = "#afafaf"; // HARE
  }
};

let q_checkBox_mouseOver = function () {
  if (isAnswerBoxClicked === true) {
    q_checkButton.style.backgroundColor = "#89e219"; // MASK GREEN
    q_checkButton_text.style.backgroundColor = "#89e219"; // MASK GREEN
  }
};

// MOUSEOVER LISTENER
q_answer1.addEventListener("mouseover", q_answerBox_mouseOver);
q_answer2.addEventListener("mouseover", q_answerBox_mouseOver);
q_answer3.addEventListener("mouseover", q_answerBox_mouseOver);
q_answer4.addEventListener("mouseover", q_answerBox_mouseOver);
q_checkButton.addEventListener("mouseover", q_checkBox_mouseOver);

//  MOUSEOUT EVENTS
let q_answerBox_mouseOut = function (event) {
  let answerBox = event.currentTarget;
  if (answerBox.style.backgroundColor !== "rgb(88, 204, 2)") {
    answerBox.style.backgroundColor = "#f7f7f7"; // POLAR
  }
};

let q_checkBox_mouseOut = function (event) {
  if (isAnswerBoxClicked === true) {
    q_checkButton.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    q_checkButton_text.style.backgroundColor = "#58cc02"; // FEATHER GREEN
  }
};

// MOUSEOUT LISTENER
q_answer1.addEventListener("mouseout", q_answerBox_mouseOut);
q_answer2.addEventListener("mouseout", q_answerBox_mouseOut);
q_answer3.addEventListener("mouseout", q_answerBox_mouseOut);
q_answer4.addEventListener("mouseout", q_answerBox_mouseOut);
q_checkButton.addEventListener("mouseout", q_checkBox_mouseOut);

// CLICK (quizGame_top_x) --> ???
let click_q_exit = function (event) {
  alert(
    "Are you sure about that?  All progress in this leson will be lost.  [WILL ADD CODE LATER]"
  );
};

// UPDATE SCREEN --> QUIZ QUESTIONS ARE LOADED
function quizFunctions(questionNumber) {
  q_question.innerHTML = quizData[questionNumber].question;
  q_answer1_image.src = quizData[questionNumber].images.a;
  q_answer2_image.src = quizData[questionNumber].images.b;
  q_answer3_image.src = quizData[questionNumber].images.c;
  q_answer4_image.src = quizData[questionNumber].images.d;

  q_answer1_text.innerHTML = quizData[questionNumber].answers.a;
  q_answer2_text.innerHTML = quizData[questionNumber].answers.b;
  q_answer3_text.innerHTML = quizData[questionNumber].answers.c;
  q_answer4_text.innerHTML = quizData[questionNumber].answers.d;
}

// GLOBAL VARIABLES - PART 3 OF 3 (QUIZ: QUESTION, IMAGES, ANSWERS)
let questionNumber = 0;
let quizData = [
  {
    question: "Which dog is feeling relaxed?",
    images: {
      a: "/images/dog1.jpg",
      b: "/images/dog12.jpg",
      c: "/images/dog3.jpg",
      d: "/images/dog13.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling relaxed?",
    images: {
      a: "/images/dog2.jpg",
      b: "/images/dog4.jpg",
      c: "/images/dog9.jpg",
      d: "/images/dog15.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling submissive?",
    images: {
      a: "/images/dog3.jpg",
      b: "/images/dog10.jpg",
      c: "/images/dog2.jpg",
      d: "/images/dog7.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling happy?",
    images: {
      a: "/images/dog4.jpg",
      b: "/images/dog15.jpg",
      c: "/images/dog8.jpg",
      d: "/images/dog12.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling ready to play?",
    images: {
      a: "/images/dog5.jpg",
      b: "/images/dog8.jpg",
      c: "/images/dog7.jpg",
      d: "/images/dog1.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling submissive?",
    images: {
      a: "/images/dog6.jpg",
      b: "/images/dog7.jpg",
      c: "/images/dog13.jpg",
      d: "/images/dog9.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog wants to be left alone?",
    images: {
      a: "/images/dog7.jpg",
      b: "/images/dog6.jpg",
      c: "/images/dog15.jpg",
      d: "/images/dog2.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling anxious and stressed?",
    images: {
      a: "/images/dog8.jpg",
      b: "/images/dog14.jpg",
      c: "/images/dog10.jpg",
      d: "/images/dog7.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling terrified?",
    images: {
      a: "/images/dog9.jpg",
      b: "/images/dog2.jpg",
      c: "/images/dog6.jpg",
      d: "/images/dog5.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling scared and ready to fight?",
    images: {
      a: "/images/dog10.jpg",
      b: "/images/dog9.jpg",
      c: "/images/dog8.jpg",
      d: "/images/dog4.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling alert?",
    images: {
      a: "/images/dog11.jpg",
      b: "/images/dog8.jpg",
      c: "/images/dog3.jpg",
      d: "/images/dog7.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling suspicious?",
    images: {
      a: "/images/dog12.jpg",
      b: "/images/dog5.jpg",
      c: "/images/dog1.jpg",
      d: "/images/dog10.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "b",
  },
  {
    question: "Which dog is stalking?",
    images: {
      a: "/images/dog13.jpg",
      b: "/images/dog6.jpg",
      c: "/images/dog9.jpg",
      d: "/images/dog15.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling defensive and territorial?",
    images: {
      a: "/images/dog14.jpg",
      b: "/images/dog11.jpg",
      c: "/images/dog1.jpg",
      d: "/images/dog4.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling angry and ready to fight?",
    images: {
      a: "/images/dog15.jpg",
      b: "/images/dog8.jpg",
      c: "/images/dog11.jpg",
      d: "/images/dog12.jpg",
    },
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "a",
  },
];
