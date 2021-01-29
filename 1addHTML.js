function addMainHTML() {
  // TOP
  let main = document.createElement("div");
  main.className = "main";
  document.body.appendChild(main);

  let main_top = document.createElement("div");
  main_top.className = "main_top";
  main.appendChild(main_top);

  let main_top_language = document.createElement("div");
  main_top_language.className = "main_top_language";
  main_top_language.innerHTML = "Language";
  main_top.appendChild(main_top_language);

  let main_top_crowns = document.createElement("div");
  main_top_crowns.className = "main_top_crowns";
  main_top_crowns.innerHTML = "Crowns";
  main_top.appendChild(main_top_crowns);

  let main_top_streak = document.createElement("div");
  main_top_streak.className = "main_top_streak";
  main_top_streak.innerHTML = "Streak";
  main_top.appendChild(main_top_streak);

  let main_top_hearts = document.createElement("div");
  main_top_hearts.className = "main_top_hearts";
  main_top_hearts.innerHTML = "Hearts";
  main_top.appendChild(main_top_hearts);

  // MIDDLE
  let main_middle = document.createElement("div");
  main_middle.className = "main_middle";
  main.appendChild(main_middle);

  let main_middle_circle1 = document.createElement("div");
  main_middle_circle1.className = "main_middle_circle1";
  main_middle.appendChild(main_middle_circle1);

  let main_middle_circle2 = document.createElement("div");
  main_middle_circle2.className = "main_middle_circle2";
  main_middle_circle2.innerHTML = "CLICK";
  main_middle.appendChild(main_middle_circle2);

  let main_middle_circle3 = document.createElement("div");
  main_middle_circle3.className = "main_middle_circle3";
  main_middle.appendChild(main_middle_circle3);

  let main_middle_circle4 = document.createElement("div");
  main_middle_circle4.className = "main_middle_circle4";
  main_middle.appendChild(main_middle_circle4);

  let main_middle_circle5 = document.createElement("div");
  main_middle_circle5.className = "main_middle_circle5";
  main_middle.appendChild(main_middle_circle5);

  let main_middle_circle6 = document.createElement("div");
  main_middle_circle6.className = "main_middle_circle6";
  main_middle.appendChild(main_middle_circle6);

  let main_middle_circle7 = document.createElement("div");
  main_middle_circle7.className = "main_middle_circle7";
  main_middle.appendChild(main_middle_circle7);

  let main_middle_circle8 = document.createElement("div");
  main_middle_circle8.className = "main_middle_circle8";
  main_middle.appendChild(main_middle_circle8);

  let main_middle_circle9 = document.createElement("div");
  main_middle_circle9.className = "main_middle_circle9";
  main_middle.appendChild(main_middle_circle9);

  let main_middle_circle10 = document.createElement("div");
  main_middle_circle10.className = "main_middle_circle10";
  main_middle_circle10.innerHTML = "CLICK";
  main_middle.appendChild(main_middle_circle10);

  let main_middle_circle11 = document.createElement("div");
  main_middle_circle11.className = "main_middle_circle11";
  main_middle.appendChild(main_middle_circle11);

  let main_middle_circle12 = document.createElement("div");
  main_middle_circle12.className = "main_middle_circle12";
  main_middle.appendChild(main_middle_circle12);

  let main_middle_circle13 = document.createElement("div");
  main_middle_circle13.className = "main_middle_circle13";
  main_middle.appendChild(main_middle_circle13);

  let main_middle_circle14 = document.createElement("div");
  main_middle_circle14.className = "main_middle_circle14";
  main_middle.appendChild(main_middle_circle14);

  let main_middle_circle15 = document.createElement("div");
  main_middle_circle15.className = "main_middle_circle15";
  main_middle.appendChild(main_middle_circle15);

  let main_middle_circle16 = document.createElement("div");
  main_middle_circle16.className = "main_middle_circle16";
  main_middle.appendChild(main_middle_circle16);

  // BOTTOM
  let main_bottom = document.createElement("div");
  main_bottom.className = "main_bottom";
  main.appendChild(main_bottom);

  let main_bottom_quiz = document.createElement("div");
  main_bottom_quiz.className = "main_bottom_quiz";
  main_bottom_quiz.innerHTML = "Quiz";
  main_bottom.appendChild(main_bottom_quiz);

  let main_bottom_story = document.createElement("div");
  main_bottom_story.className = "main_bottom_story";
  main_bottom_story.innerHTML = "Story";
  main_bottom.appendChild(main_bottom_story);

  let main_bottom_profile = document.createElement("div");
  main_bottom_profile.className = "main_bottom_profile";
  main_bottom_profile.innerHTML = "Profile";
  main_bottom.appendChild(main_bottom_profile);

  let main_bottom_league = document.createElement("div");
  main_bottom_league.className = "main_bottom_league";
  main_bottom_league.innerHTML = "League";
  main_bottom.appendChild(main_bottom_league);

  let main_bottom_shop = document.createElement("div");
  main_bottom_shop.className = "main_bottom_shop";
  main_bottom_shop.innerHTML = "Shop";
  main_bottom.appendChild(main_bottom_shop);
}
addMainHTML();

function addQuizHTML() {
  let quizGame = document.createElement("div");
  quizGame.className = "quizGame";
  document.body.appendChild(quizGame);

  let top = document.createElement("div");
  top.className = "quizGame_top";
  quizGame.appendChild(top);

  let top_container_x_AND_progressBar_AND_hearts = document.createElement(
    "div"
  );
  top_container_x_AND_progressBar_AND_hearts.className =
    "quizGame_top_container_x_AND_progressBar_AND_hearts";
  top.appendChild(top_container_x_AND_progressBar_AND_hearts);

  let top_x = document.createElement("div");
  top_x.className = "quizGame_top_x";
  top_x.innerHTML = "X";
  top_container_x_AND_progressBar_AND_hearts.appendChild(top_x);

  let top_progressBar = document.createElement("div");
  top_progressBar.className = "quizGame_top_progressBar";
  top_container_x_AND_progressBar_AND_hearts.appendChild(top_progressBar);

  let top_progressBar_percentComplete = document.createElement("div");
  top_progressBar_percentComplete.className =
    "quizGame_top_progressBar_percentComplete";
  top_progressBar.appendChild(top_progressBar_percentComplete);

  let top_hearts = document.createElement("div");
  top_hearts.className = "quizGame_top_hearts";
  top_hearts.innerHTML = "&#128420;5";
  top_container_x_AND_progressBar_AND_hearts.appendChild(top_hearts);

  let middle = document.createElement("div");
  middle.className = "quizGame_middle";
  quizGame.appendChild(middle);

  let middle_question = document.createElement("div");
  middle_question.className = "quizGame_middle_question";
  middle_question.innerHTML = "QUESTION 1";
  middle.appendChild(middle_question);

  let middle_answerBoxes = document.createElement("div");
  middle_answerBoxes.className = "quizGame_middle_answerBoxes";
  middle.appendChild(middle_answerBoxes);

  // middle_answer1
  let middle_answer1 = document.createElement("div");
  middle_answer1.className = "quizGame_middle_answer1";
  middle_answerBoxes.appendChild(middle_answer1);

  let middle_answer1_image = document.createElement("img");
  middle_answer1_image.src = "dog.png";
  middle_answer1_image.alt = "dog.png";
  middle_answer1_image.className = "quizGame_middle_answer1_image";
  middle_answer1.appendChild(middle_answer1_image);

  let middle_answer1_text = document.createElement("div");
  middle_answer1_text.className = "quizGame_middle_answer1_text";
  middle_answer1_text.innerHTML = "ANSWER 1";
  middle_answer1.appendChild(middle_answer1_text);

  // middle_answer2
  let middle_answer2 = document.createElement("div");
  middle_answer2.className = "quizGame_middle_answer2";
  middle_answerBoxes.appendChild(middle_answer2);

  let middle_answer2_image = document.createElement("img");
  middle_answer2_image.src = "dog.png";
  middle_answer2_image.alt = "dog.png";
  middle_answer2_image.className = "quizGame_middle_answer2_image";
  middle_answer2.appendChild(middle_answer2_image);

  let middle_answer2_text = document.createElement("div");
  middle_answer2_text.className = "quizGame_middle_answer2_text";
  middle_answer2_text.innerHTML = "ANSWER 2";
  middle_answer2.appendChild(middle_answer2_text);

  // middle_answer3
  let middle_answer3 = document.createElement("div");
  middle_answer3.className = "quizGame_middle_answer3";
  middle_answerBoxes.appendChild(middle_answer3);

  let middle_answer3_image = document.createElement("img");
  middle_answer3_image.src = "dog.png";
  middle_answer3_image.alt = "dog.png";
  middle_answer3_image.className = "quizGame_middle_answer3_image";
  middle_answer3.appendChild(middle_answer3_image);

  let middle_answer3_text = document.createElement("div");
  middle_answer3_text.className = "quizGame_middle_answer3_text";
  middle_answer3_text.innerHTML = "ANSWER 3";
  middle_answer3.appendChild(middle_answer3_text);

  // middle_answer4
  let middle_answer4 = document.createElement("div");
  middle_answer4.className = "quizGame_middle_answer4";
  middle_answerBoxes.appendChild(middle_answer4);

  let middle_answer4_image = document.createElement("img");
  middle_answer4_image.src = "/images/dog9.jpg";
  middle_answer4_image.alt = "dog.png";
  middle_answer4_image.className = "quizGame_middle_answer4_image";
  middle_answer4.appendChild(middle_answer4_image);

  let middle_answer4_text = document.createElement("div");
  middle_answer4_text.className = "quizGame_middle_answer4_text";
  middle_answer4_text.innerHTML = "ANSWER 4";
  middle_answer4.appendChild(middle_answer4_text);

  let bottom = document.createElement("div");
  bottom.className = "quizGame_bottom";
  quizGame.appendChild(bottom);

  let bottom_container_skipButton_AND_checkButton = document.createElement(
    "div"
  );
  bottom_container_skipButton_AND_checkButton.className =
    "quizGame_bottom_container_skipButton_AND_checkButton";
  bottom.appendChild(bottom_container_skipButton_AND_checkButton);

  let bottom_skipButton = document.createElement("div");
  bottom_skipButton.className = "quizGame_bottom_skipButton";
  bottom_container_skipButton_AND_checkButton.appendChild(bottom_skipButton);

  let bottom_skipButton_text = document.createElement("div");
  bottom_skipButton_text.className = "quizGame_bottom_skipButton_text";
  bottom_skipButton_text.innerHTML = "SKIP";
  bottom_skipButton.appendChild(bottom_skipButton_text);

  let bottom_checkButton = document.createElement("div");
  bottom_checkButton.className = "quizGame_bottom_checkButton";
  bottom_container_skipButton_AND_checkButton.appendChild(bottom_checkButton);

  let bottom_checkButton_text = document.createElement("div");
  bottom_checkButton_text.className = "quizGame_bottom_checkButton_text";
  bottom_checkButton_text.innerHTML = "CHECK";
  bottom_checkButton.appendChild(bottom_checkButton_text);
}

addQuizHTML();
