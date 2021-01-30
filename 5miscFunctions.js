// UPDATE SCREEN --> QUIZ QUESTIONS ARE LOADED
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
quizFunctions(questionNumber);
