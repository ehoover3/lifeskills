// GLOBAL VARIABLES - PART 1 OF 3 (HTML VARIABLES)

let main_middle_circle2 = document.querySelector(".main_middle_circle2");
let main_middle_circle10 = document.querySelector(".main_middle_circle10");

let quizGame = document.querySelector(".quizGame");
let quizGame_top_x = document.querySelector(".quizGame_top_x");

let quizGame_top_progressBar = document.querySelector(
  ".quizGame_top_progressBar"
);
let quizGame_top_progressBar_percentComplete = document.querySelector(
  ".quizGame_top_progressBar_percentComplete"
);
let quizGame_top_hearts = document.querySelector(".quizGame_top_hearts");
let quizGame_middle_question = document.querySelector(
  ".quizGame_middle_question"
);
let quizGame_middle_answer1 = document.querySelector(
  ".quizGame_middle_answer1"
);
let quizGame_middle_answer1_image = document.querySelector(
  ".quizGame_middle_answer1_image"
);
let quizGame_middle_answer1_text = document.querySelector(
  ".quizGame_middle_answer1_text"
);
let quizGame_middle_answer2 = document.querySelector(
  ".quizGame_middle_answer2"
);
let quizGame_middle_answer2_image = document.querySelector(
  ".quizGame_middle_answer2_image"
);
let quizGame_middle_answer2_text = document.querySelector(
  ".quizGame_middle_answer2_text"
);
let quizGame_middle_answer3 = document.querySelector(
  ".quizGame_middle_answer3"
);
let quizGame_middle_answer3_image = document.querySelector(
  ".quizGame_middle_answer3_image"
);
let quizGame_middle_answer3_text = document.querySelector(
  ".quizGame_middle_answer3_text"
);
let quizGame_middle_answer4 = document.querySelector(
  ".quizGame_middle_answer4"
);
let quizGame_middle_answer4_image = document.querySelector(
  ".quizGame_middle_answer4_image"
);
let quizGame_middle_answer4_text = document.querySelector(
  ".quizGame_middle_answer4_text"
);
let quizGame_bottom_skipButton = document.querySelector(
  ".quizGame_bottom_skipButton"
);
let quizGame_bottom_skipButton_text = document.querySelector(
  ".quizGame_bottom_skipButton_text"
);
let quizGame_bottom_checkButton = document.querySelector(
  ".quizGame_bottom_checkButton"
);
let quizGame_bottom_checkButton_text = document.querySelector(
  ".quizGame_bottom_checkButton_text"
);

// GLOBAL VARIABLES - PART 2 OF 3 (CSS VARIABLES)
let isAnswerBoxClicked = false;

// GLOBAL VARIABLES - PART 3 OF 3 (QUIZ: QUESTION, IMAGES, ANSWERS)
let questionNumber = 0;
let myQuestions = [
  {
    question: "Which dog is feeling relaxed?",
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
    question: "Which dog is feeling relaxed?",
    images: {
      a: "/images/dog2.jpg",
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
    question: "Which dog is feeling submissive?",
    images: {
      a: "/images/dog3.jpg",
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
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling happy?",
    images: {
      a: "/images/dog4.jpg",
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
  {
    question: "Which dog is feeling ready to play?",
    images: {
      a: "/images/dog5.jpg",
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
    question: "Which dog is feeling submissive?",
    images: {
      a: "/images/dog6.jpg",
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
    correctAnswer: "a",
  },
  {
    question: "Which dog wants to be left alone?",
    images: {
      a: "/images/dog7.jpg",
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
  {
    question: "Which dog is feeling anxious and stressed?",
    images: {
      a: "/images/dog8.jpg",
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
    question: "Which dog is feeling terrified?",
    images: {
      a: "/images/dog9.jpg",
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
    correctAnswer: "a",
  },
  {
    question: "Which dog is feeling scared and ready to fight?",
    images: {
      a: "/images/dog10.jpg",
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
  {
    question: "Which dog is feeling alert?",
    images: {
      a: "/images/dog11.jpg",
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
    question: "Which dog is feeling suspicious?",
    images: {
      a: "/images/dog12.jpg",
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
    question: "Which dog is stalking?",
    images: {
      a: "/images/dog13.jpg",
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
  {
    question: "Which dog is feeling defensive and territorial?",
    images: {
      a: "/images/dog14.jpg",
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
    question: "Which dog is feeling angry and ready to fight?",
    images: {
      a: "/images/dog15.jpg",
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
    correctAnswer: "a",
  },
];
