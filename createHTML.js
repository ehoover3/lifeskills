function createHTML() {
  let quizGame = document.createElement("div");
  quizGame.className = "quizGame";
  document.body.appendChild(quizGame);

  let top = document.createElement("div");
  top.className = "top";
  quizGame.appendChild(top);

  let top_container_x_AND_progressBar_AND_hearts = document.createElement(
    "div"
  );
  top_container_x_AND_progressBar_AND_hearts.className =
    "top_container_x_AND_progressBar_AND_hearts";
  top.appendChild(top_container_x_AND_progressBar_AND_hearts);

  let top_x = document.createElement("div");
  top_x.className = "top_x";
  top_x.innerHTML = "X";
  top_container_x_AND_progressBar_AND_hearts.appendChild(top_x);

  let top_progressBar = document.createElement("div");
  top_progressBar.className = "top_progressBar";
  top_container_x_AND_progressBar_AND_hearts.appendChild(top_progressBar);

  let top_progressBar_percentComplete = document.createElement("div");
  top_progressBar_percentComplete.className = "top_progressBar_percentComplete";
  top_progressBar.appendChild(top_progressBar_percentComplete);

  let top_hearts = document.createElement("div");
  top_hearts.className = "top_hearts";
  top_hearts.innerHTML = "&#128420;5";
  top_container_x_AND_progressBar_AND_hearts.appendChild(top_hearts);

  let middle = document.createElement("div");
  middle.className = "middle";
  quizGame.appendChild(middle);

  let middle_question = document.createElement("div");
  middle_question.className = "middle_question";
  middle_question.innerHTML = "QUESTION 1";

  middle.appendChild(middle_question);

  let middle_answerBoxes = document.createElement("div");
  middle_answerBoxes.className = "middle_answerBoxes";
  middle.appendChild(middle_answerBoxes);
  // middle_answer1
  let middle_answer1 = document.createElement("div");
  middle_answer1.className = "middle_answer1";
  middle_answerBoxes.appendChild(middle_answer1);

  let middle_answer1_image = document.createElement("img");
  middle_answer1_image.src = "dog.png";
  middle_answer1_image.alt = "dog.png";
  middle_answer1_image.className = "middle_answer1_image";
  middle_answer1.appendChild(middle_answer1_image);

  let middle_answer1_text = document.createElement("div");
  middle_answer1_text.className = "middle_answer1_text";
  middle_answer1_text.innerHTML = "ANSWER 1";
  middle_answer1.appendChild(middle_answer1_text);
  // middle_answer2
  let middle_answer2 = document.createElement("div");
  middle_answer2.className = "middle_answer2";
  middle_answerBoxes.appendChild(middle_answer2);

  let middle_answer2_image = document.createElement("img");
  middle_answer2_image.src = "dog.png";
  middle_answer2_image.alt = "dog.png";
  middle_answer2_image.className = "middle_answer2_image";
  middle_answer2.appendChild(middle_answer2_image);

  let middle_answer2_text = document.createElement("div");
  middle_answer2_text.className = "middle_answer2_text";
  middle_answer2_text.innerHTML = "ANSWER 2";
  middle_answer2.appendChild(middle_answer2_text);
  // middle_answer3
  let middle_answer3 = document.createElement("div");
  middle_answer3.className = "middle_answer3";
  middle_answerBoxes.appendChild(middle_answer3);

  let middle_answer3_image = document.createElement("img");
  middle_answer3_image.src = "dog.png";
  middle_answer3_image.alt = "dog.png";
  middle_answer3_image.className = "middle_answer3_image";
  middle_answer3.appendChild(middle_answer3_image);

  let middle_answer3_text = document.createElement("div");
  middle_answer3_text.className = "middle_answer3_text";
  middle_answer3_text.innerHTML = "ANSWER 3";
  middle_answer3.appendChild(middle_answer3_text);
  // middle_answer4
  let middle_answer4 = document.createElement("div");
  middle_answer4.className = "middle_answer4";
  middle_answerBoxes.appendChild(middle_answer4);

  let middle_answer4_image = document.createElement("img");
  middle_answer4_image.src = "/images/dog9.jpg";

  middle_answer4_image.alt = "dog.png";
  middle_answer4_image.className = "middle_answer4_image";
  middle_answer4.appendChild(middle_answer4_image);

  let middle_answer4_text = document.createElement("div");
  middle_answer4_text.className = "middle_answer4_text";
  middle_answer4_text.innerHTML = "ANSWER 4";
  middle_answer4.appendChild(middle_answer4_text);

  let bottom = document.createElement("div");
  bottom.className = "bottom";
  quizGame.appendChild(bottom);

  let bottom_container_skipButton_AND_checkButton = document.createElement(
    "div"
  );
  bottom_container_skipButton_AND_checkButton.className =
    "bottom_container_skipButton_AND_checkButton";
  bottom.appendChild(bottom_container_skipButton_AND_checkButton);

  let bottom_skipButton = document.createElement("div");
  bottom_skipButton.className = "bottom_skipButton";
  bottom_container_skipButton_AND_checkButton.appendChild(bottom_skipButton);

  let bottom_skipButton_text = document.createElement("div");
  bottom_skipButton_text.className = "bottom_skipButton_text";
  bottom_skipButton_text.innerHTML = "SKIP";
  bottom_skipButton.appendChild(bottom_skipButton_text);

  let bottom_checkButton = document.createElement("div");
  bottom_checkButton.className = "bottom_checkButton";
  bottom_container_skipButton_AND_checkButton.appendChild(bottom_checkButton);

  let bottom_checkButton_text = document.createElement("div");
  bottom_checkButton_text.className = "bottom_checkButton_text";
  bottom_checkButton_text.innerHTML = "CHECK";
  bottom_checkButton.appendChild(bottom_checkButton_text);
}
createHTML();
