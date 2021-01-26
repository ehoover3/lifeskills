// GLOBAL VARIABLES - PART 3 OF 3 (QUIZ: QUESTION, IMAGES, ANSWERS)
let questionNumber = 0;
let myQuestions = [
  {
    question: "Which dog is feeling tired?",
    images: {
      a: "/images/dog1.jpg",
      b: "/images/dog2.jpg",
      c: "/images/dog3.jpg",
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
    question: "Which dog is feeling sad?",
    image: "",
    images: {
      a: "/images/dog5.jpg",
      b: "/images/dog6.jpg",
      c: "/images/dog7.jpg",
      d: "/images/dog8.jpg",
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
    question: "Which dog is feeling scared?",
    image: "",
    images: {
      a: "/images/dog9.jpg",
      b: "/images/dog10.jpg",
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

// CLICK EVENT - PART 2 OF 2
let bottom_checkButton_click = function (event) {
  questionNumber += 1;
  quizFunctions(questionNumber);
  isAnswerBoxClicked = false; // reset css for next question
  middle_answer1.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
  middle_answer2.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
  middle_answer3.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
  middle_answer4.style.backgroundColor = "#f7f7f7"; // POLAR // reset css for next question
  bottom_checkButton.style.backgroundColor = "#e5e5e5"; // SWAN // reset css for next question
  bottom_checkButton_text.style.backgroundColor = "#e5e5e5"; // SWAN // reset css for next question
};

// CLICK LISTENER - PART 2 OF 2
bottom_checkButton.addEventListener("click", bottom_checkButton_click);

// UPDATE SCREEN
function quizFunctions(questionNumber) {
  middle_question.innerHTML = myQuestions[questionNumber].question;
  middle_answer1_image.src = myQuestions[questionNumber].images.a;
  middle_answer2_image.src = myQuestions[questionNumber].images.b;
  middle_answer3_image.src = myQuestions[questionNumber].images.c;
  middle_answer4_image.src = myQuestions[questionNumber].images.d;

  middle_answer1_text.innerHTML = myQuestions[questionNumber].answers.a;
  middle_answer2_text.innerHTML = myQuestions[questionNumber].answers.b;
  middle_answer3_text.innerHTML = myQuestions[questionNumber].answers.c;
  middle_answer4_text.innerHTML = myQuestions[questionNumber].answers.d;
}
quizFunctions(questionNumber);
