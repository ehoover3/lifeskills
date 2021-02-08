// TO DO: I'm not sure if the variable "isFeedbackBoxHidden" is properly named for easy understanding.  Maybe rename it.

class UserDatabase {
  constructor(crownCount, streakCount, heartCount, gemCount, pointCount) {
    this.crownCount = 5;
    this.streakCount = 6;
    this.heartCount = 5;
    this.gemCount = 7;
    this.pointCount = 10;
  }
}
let newUser = new UserDatabase(5, 6, 7, 10);

function mainPageHTML() {
  markup = `
  <div class="main">
    <div class="m_top">
      <div class="m_subject">&#128054;</div>
      <div class="m_crown">&#128081;${newUser.crownCount}</div>
      <div class="m_streak">&#128293;${newUser.streakCount}</div>
      <div class="m_heart">&#128420;${newUser.heartCount}</div>
    </div>
 
    <div class="m_middle">
      <div class="m_row1">
        <div class="m_circle1" onclick="quizGameHTML()">CLICK</div>
      </div>
      <div class="m_row2">
        <div class="m_circle2"></div>
        <div class="m_circle3"></div>
      </div>
      <div class="m_row3">
        <div class="m_circle4"></div>
        <div class="m_circle5"></div>
      </div>
    </div>
    <div class="m_bottom">
      <div class="m_quiz">&#128218;</div>
      <div class="m_story">&#128506;</div>
      <div class="m_profile">&#127968;</div>
      <div class="m_league">&#127967;</div>
      <div class="m_shop">&#127974;</div>
    </div>
    </div>
  </div>`;
  document.body.innerHTML = markup;
}
mainPageHTML();

function quizGameHTML() {
  markup = `
<div class="quiz">
  <div class="q_top">
    <div class="q_exit" onmouseenter="onMouseEnter_exit()" onmouseleave="onMouseLeave_exit()" onclick="onClick_exit()">X</div>
    <div class="q_myFullBar">
      <div class="q_myBar"></div>
    </div>
    <div class="q_heart">&#128420;5</div>
  </div>
  <div class="q_middle">
    <div class="q_question">QUESTION 1</div>
    <div class="q_answerBox">
      <div class="q_answer1" onmouseenter="onMouseEnter_answer(event)" onmouseleave="onMouseLeave_answer(event)" onclick="onClick_answer(event)">
        <img class="q_answer1_image" src="/images/dog.png" alt="/images/dog.png"></img>
        <div class="q_answer1_text">ANSWER 1</div>
      </div>
      <div class="q_answer2" onmouseenter="onMouseEnter_answer(event)" onmouseleave="onMouseLeave_answer(event)" onclick="onClick_answer(event)">
        <img class="q_answer2_image" src="/images/dog.png" alt="/images/dog.png"></img>
        <div class="q_answer2_text">ANSWER 2</div>
      </div>
      <div class="q_answer3" onmouseenter="onMouseEnter_answer(event)" onmouseleave="onMouseLeave_answer(event)" onclick="onClick_answer(event)">
        <img class="q_answer3_image" src="/images/dog.png" alt="/images/dog.png"></img>
        <div class="q_answer3_text">ANSWER 3</div>
      </div>
      <div class="q_answer4" onmouseenter="onMouseEnter_answer(event)" onmouseleave="onMouseLeave_answer(event)" onclick="onClick_answer(event)">
        <img class="q_answer4_image" src="/images/dog.png" alt="/images/dog.png"></img>
        <div class="q_answer4_text">ANSWER 4</div>
      </div>
    </div>
  </div>
  <div class="q_bottom">
      <div class="q_hintButton" onmouseenter="onMouseEnter_hintButton()" onmouseleave="onMouseLeave_hintButton()" onclick="onClick_hintButton()">
        <div class="q_hintButton_text">HINT</div>
      </div>
      <div class="q_checkButton" onmouseenter="onMouseEnter_checkButton()" onmouseleave="onMouseLeave_checkButton()" onclick="onClick_checkButton()">
        <div class="q_checkButton_text">CHECK</div>
      </div>
  </div>
  <div class="q_feedbackBox">
    <div class="q_feedbackBox_text">
      <div class="q_feedbackBox_text1"></div>
      <div class="q_feedbackBox_text2"></div>
    </div>
    <div class="q_feedbackBox_emoji">&#127987</div>
  </div>
</div>
`;
  document.body.innerHTML = markup;
  document.querySelector(".q_myBar").style.width = progressBarWidth + "%"; // progress bar code
  updateQuizScreen(questionNumber);
}

// *** onMouseEnter EVENTS ***
function onMouseEnter_exit() {
  document.querySelector(".q_exit").style.color = "rgb(229, 229, 229)";
}

function onMouseEnter_answer(event) {
  // guard clause - don't run if feedbackBox is shown
  if (isFeedbackBoxHidden === true) {
    let answer = event.currentTarget;
    // rgb(88, 204, 2) === FEATHER GREEN
    if (answer.style.backgroundColor !== "rgb(88, 204, 2)") {
      //    document.querySelector(".q_answer1")
      answer.style.backgroundColor = "#afafaf"; // HARE
    }
  }
}

function onMouseEnter_hintButton() {
  document.querySelector(".q_hintButton").style.backgroundColor =
    "rgb(229, 229, 229)";
}

function onMouseEnter_checkButton() {
  if (
    document.querySelector(".q_checkButton").style.backgroundColor ===
    "rgb(88, 204, 2)" // FEATHER GREEN
  ) {
    document.querySelector(".q_checkButton").style.backgroundColor =
      "rgb(137, 226, 25)"; // MASK GREEN
    document.querySelector(".q_checkButton_text").style.backgroundColor =
      "rgb(137, 226, 25)"; // MASK GREEN
  }
}

// *** onMouseLeave Events ***
function onMouseLeave_exit() {
  document.querySelector(".q_exit").style.color = "rgb(0, 0, 0)";
}

function onMouseLeave_answer(event) {
  let answer = event.currentTarget;
  if (answer.style.backgroundColor === "rgb(175, 175, 175)") {
    answer.style.backgroundColor = "rgb(247, 247, 247)";
  }
}

function onMouseLeave_hintButton() {
  document.querySelector(".q_hintButton").style.backgroundColor =
    "rgb(247, 247, 247)";
}

function onMouseLeave_checkButton() {
  if (
    document.querySelector(".q_checkButton").style.backgroundColor ===
    "rgb(137, 226, 25)" // MASK GREEN
  ) {
    document.querySelector(".q_checkButton").style.backgroundColor =
      "rgb(88, 204, 2)"; // FEATHER GREEN
    document.querySelector(".q_checkButton_text").style.backgroundColor =
      "rgb(88, 204, 2)"; // FEATHER GREEN
  }
}

// *** onClick Events ***
function onClick_exit() {
  // reset variables
  isAnswerBoxClicked = false;
  answer = "";
  isFeedbackBoxHidden = true;
  questionNumber = 0;
  progressBarWidth = 0;

  // load main page
  mainPageHTML();
}

function onClick_answer(event) {
  if (isFeedbackBoxHidden === true) {
    let selectedAnswerBox = event.currentTarget;
    document.querySelector(".q_answer1").style.backgroundColor = "#f7f7f7"; // POLAR
    document.querySelector(".q_answer2").style.backgroundColor = "#f7f7f7"; // POLAR
    document.querySelector(".q_answer3").style.backgroundColor = "#f7f7f7"; // POLAR
    document.querySelector(".q_answer4").style.backgroundColor = "#f7f7f7"; // POLAR
    selectedAnswerBox.style.backgroundColor = "#58cc02"; // FEATHER GREEN
    answer = selectedAnswerBox.innerText;
    document.querySelector(".q_checkButton").style.backgroundColor = "#58cc02"; // FEATHER GREEN
    document.querySelector(".q_checkButton_text").style.backgroundColor =
      "#58cc02"; // FEATHER GREEN
    isAnswerBoxClicked = true;
  }
}

function onClick_hintButton() {
  alert("will add code here later");
}

function onClick_checkButton() {
  if (isAnswerBoxClicked === true && isFeedbackBoxHidden === true) {
    // show feedback box
    document.querySelector(".q_feedbackBox").style.display = "flex";
    isFeedbackBoxHidden = false;

    // disable onMouseEnter, onMouseLeave, and some onClick events

    // show feedback's correct answer response
    if (answer === myQuestions[questionNumber].correctAnswer) {
      document.querySelector(".q_feedbackBox_text1").style.color =
        "rgb(88,204,2)"; // color feather green
      document.querySelector(".q_feedbackBox_text2").style.color =
        "rgb(88,204,2)"; // color feather green
      document.querySelector(".q_feedbackBox_text1").innerHTML = "Good job!";
      document.querySelector(".q_feedbackBox_text2").innerHTML = "";
    } else {
      document.querySelector(".q_feedbackBox_text1").style.color =
        "rgb(234,43,43)"; // color fireant
      document.querySelector(".q_feedbackBox_text2").style.color =
        "rgb(234,43,43)"; // color fireant

      // show feedback's wrong answer response
      document.querySelector(
        ".q_feedbackBox_text1"
      ).innerHTML = `Correct Answer:`;
      document.querySelector(
        ".q_feedbackBox_text2"
      ).innerHTML = `${myQuestions[questionNumber].correctAnswer}`;
    }

    document.querySelector(".q_checkButton_text").innerHTML = "CONTINUE";
  } else if (isAnswerBoxClicked === true && isFeedbackBoxHidden === false) {
    // load the next question
    questionNumber += 1;
    updateQuizProgressBar();
    updateQuizScreen(questionNumber);
    document.querySelector(".q_checkButton_text").innerHTML = "CHECK";

    // reset answerboxes & checkbox to default for the next question
    document.querySelector(".q_answer1").style.backgroundColor = "#f7f7f7"; // POLAR
    document.querySelector(".q_answer2").style.backgroundColor = "#f7f7f7"; // POLAR
    document.querySelector(".q_answer3").style.backgroundColor = "#f7f7f7"; // POLAR
    document.querySelector(".q_answer4").style.backgroundColor = "#f7f7f7"; // POLAR
    document.querySelector(".q_checkButton").style.backgroundColor = "#e5e5e5"; // SWAN
    document.querySelector(".q_checkButton_text").style.backgroundColor =
      "#e5e5e5"; // SWAN
    isAnswerBoxClicked = false;
    document.querySelector(".q_feedbackBox").style.display = "none";
    isFeedbackBoxHidden = true;
  }
}

let isAnswerBoxClicked = false;
let answer = "";

// QUIZ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let isFeedbackBoxHidden = true;
let questionNumber = 0;
let progressBarWidth = 0;

function updateQuizProgressBar() {
  let setIntervalFX = setInterval(updateProgressBar, 10); //setInterval(function, milliseconds) // Runs the frame function every 10 milliseconds
  function updateProgressBar() {
    if (progressBarWidth >= 100) {
      // Step 3: If progress bar is full, stay at 100% and don't go beyond that
      return;
    } else if (
      progressBarWidth >=
      100 / (myQuestions.length / (questionNumber + 0))
    ) {
      // Step 2: Progress bar stops expanding when it reaches a certain point
      clearInterval(setIntervalFX); // Stop running the setInterval function
    } else {
      progressBarWidth++; // Step 1: Progress bar expands
      document.querySelector(".q_myBar").style.width = progressBarWidth + "%";
    }
  }
}

function updateQuizScreen(questionNumber) {
  // guard clause
  if (questionNumber + 1 < myQuestions.length) {
    // update screen with the next question
    document.querySelector(".q_question").innerHTML =
      myQuestions[questionNumber].question;
    document.querySelector(".q_answer1_image").src =
      myQuestions[questionNumber].images.a;
    document.querySelector(".q_answer2_image").src =
      myQuestions[questionNumber].images.b;
    document.querySelector(".q_answer3_image").src =
      myQuestions[questionNumber].images.c;
    document.querySelector(".q_answer4_image").src =
      myQuestions[questionNumber].images.d;

    document.querySelector(".q_answer1_text").innerHTML =
      myQuestions[questionNumber].answers.a;
    document.querySelector(".q_answer2_text").innerHTML =
      myQuestions[questionNumber].answers.b;
    document.querySelector(".q_answer3_text").innerHTML =
      myQuestions[questionNumber].answers.c;
    document.querySelector(".q_answer4_text").innerHTML =
      myQuestions[questionNumber].answers.d;
  }
}

let myQuestions = [
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "2",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
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
    correctAnswer: "1",
  },
];
