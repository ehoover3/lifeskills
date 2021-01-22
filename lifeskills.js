// // VARIABLES
// let area3_box1 = document.querySelector("#box1");
// let area3_box2 = document.querySelector("#box2");
// let area3_box3 = document.querySelector("#box3");
// let area3_box4 = document.querySelector("#box4");
// let area3_box5 = document.querySelector("#box5");
// let box1to4Click = false;
// let isBox5visible = false;

// function createQuiz() {}

// // class newDivTraveler {
// //   constructor(name) {
// //     this.name = name;
// //     this.food = 1;
// //     this.isHealthy = true;
// //   }{}

// // CREATE GAMEBOARD (FROM CONNECT 4)
// // for (let colIndex = 1; colIndex <= 7; colIndex++) {

// //   let gameBoard = document.querySelector(".gameBoard"); //append to gameBoard div
// //   gameBoard.appendChild(newDiv);
// // }

// // let newDiv = document.createElement("div");
// // newDiv.className = "fullScreen";
// // document.body.appendChild(newDiv);

// // newDiv.id = "column" + colIndex;

// // LOADS
// document.getElementById("instructions").innerHTML =
//   "Which image shows surprise?";

// const box = {
//   box1to4Click: false,
//   area1_x: function () {
//     alert("Add stuff later");
//   },
//   area1_progressBar: function () {
//     let i = 0;
//     if (i == 0) {
//       i = 1;
//       let elem = document.getElementById("myBar");
//       let width = 1;
//       let id = setInterval(frame, 10);
//       function frame() {
//         if (width >= 100) {
//           clearInterval(id);
//           i = 0;
//         } else {
//           width++;
//           elem.style.width = width + "%";
//         }
//       }
//     }
//   },

//   area1_hearts: function () {
//     alert("Add stuff later");
//   },
//   area2_instructions: function () {},
//   area3_box1: function () {
//     if (isBox5visible === false) {
//       box1.style.backgroundColor = "#58cc02"; // FEATHER GREEN
//       box2.style.backgroundColor = "#afafaf"; // WOLF
//       box3.style.backgroundColor = "#afafaf"; // WOLF
//       box4.style.backgroundColor = "#afafaf"; // WOLF
//       check.style.backgroundColor = "#58cc02"; // FEATHER GREEN
//       box1to4Click = true;
//     }
//   },
//   area3_box2: function () {
//     if (isBox5visible === false) {
//       box1.style.backgroundColor = "#afafaf"; // HARE
//       box2.style.backgroundColor = "#58cc02"; // FEATHER GREEN
//       box3.style.backgroundColor = "#afafaf"; // HARE
//       box4.style.backgroundColor = "#afafaf"; // HARE
//       check.style.backgroundColor = "#58cc02"; // FEATHER GREEN
//       box1to4Click = true;
//     }
//   },
//   area3_box3: function () {
//     if (isBox5visible === false) {
//       box1.style.backgroundColor = "#afafaf"; // HARE
//       box2.style.backgroundColor = "#afafaf"; // HARE
//       box3.style.backgroundColor = "#58cc02"; // FEATHER GREEN
//       box4.style.backgroundColor = "#afafaf"; // HARE
//       check.style.backgroundColor = "#58cc02"; // FEATHER GREEN
//       box1to4Click = true;
//     }
//   },
//   area3_box4: function () {
//     if (isBox5visible === false) {
//       box1.style.backgroundColor = "#afafaf"; // HARE
//       box2.style.backgroundColor = "#afafaf"; // HARE
//       box3.style.backgroundColor = "#afafaf"; // HARE
//       box4.style.backgroundColor = "#58cc02"; // FEATHER GREEN
//       check.style.backgroundColor = "#58cc02"; // FEATHER GREEN
//       box1to4Click = true;
//     }
//   },
//   area4_check: function () {
//     if (box1to4Click === true) {
//       document.getElementById("hiddenContainer").style.visibility = "visible";
//       this.area1_progressBar();
//       isBox5visible = true;
//     }
//   },
//   area4_lightBulb: function () {
//     alert("Add stuff later");
//   },

//   area5_hiddenIcon1: function () {
//     alert("Add stuff later1");
//   },

//   area5_hiddenIcon2: function () {
//     alert("Add stuff later2");
//   },

//   area5_hiddenContinue: function () {
//     alert("need to fix code to not reload, but instead do pagination");
//     location.reload();
//   },
// };

// (function(){
//   // Functions
//   function buildQuiz(){
//     // variable to store the HTML output
//     const output = [];

//     // for each question...
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {

//         // variable to store the list of possible answers
//         const answers = [];

//         // and for each available answer...
//         for(letter in currentQuestion.answers){

//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }

//         // add this question and its answers to the output
//         output.push(
//           `<div class="slide">
//             <div class="question"> ${currentQuestion.question} </div>
//             <div class="answers"> ${answers.join("")} </div>
//           </div>`
//         );
//       }
//     );

//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
//   }

//   function showResults(){

//     // gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll('.answers');

//     // keep track of user's answers
//     let numCorrect = 0;

//     // for each question...
//     myQuestions.forEach( (currentQuestion, questionNumber) => {

//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//       // if answer is correct
//       if(userAnswer === currentQuestion.correctAnswer){
//         // add to the number of correct answers
//         numCorrect++;

//         // color the answers green
//         answerContainers[questionNumber].style.color = 'lightgreen';
//       }
//       // if answer is wrong or blank
//       else{
//         // color the answers red
//         answerContainers[questionNumber].style.color = 'red';
//       }
//     });

//     // show number of correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//   }

//   function showSlide(n) {
//     slides[currentSlide].classList.remove('active-slide');
//     slides[n].classList.add('active-slide');
//     currentSlide = n;
//     if(currentSlide === 0){
//       previousButton.style.display = 'none';
//     }
//     else{
//       previousButton.style.display = 'inline-block';
//     }
//     if(currentSlide === slides.length-1){
//       nextButton.style.display = 'none';
//       submitButton.style.display = 'inline-block';
//     }
//     else{
//       nextButton.style.display = 'inline-block';
//       submitButton.style.display = 'none';
//     }
//   }

//   function showNextSlide() {
//     showSlide(currentSlide + 1);
//   }

//   function showPreviousSlide() {
//     showSlide(currentSlide - 1);
//   }

//   // Variables
//   const quizContainer = document.getElementById('quiz');
//   const resultsContainer = document.getElementById('results');
//   const submitButton = document.getElementById('submit');
//   const myQuestions = [
//     {
//       question: "Who invented JavaScript?",
//       answers: {
//         a: "Douglas Crockford",
//         b: "Sheryl Sandberg",
//         c: "Brendan Eich"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which one of these is a JavaScript package manager?",
//       answers: {
//         a: "Node.js",
//         b: "TypeScript",
//         c: "npm"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which tool can you use to ensure code quality?",
//       answers: {
//         a: "Angular",
//         b: "jQuery",
//         c: "RequireJS",
//         d: "ESLint"
//       },
//       correctAnswer: "d"
//     }
//   ];

//   // Kick things off
//   buildQuiz();

//   // Pagination
//   const previousButton = document.getElementById("previous");
//   const nextButton = document.getElementById("next");
//   const slides = document.querySelectorAll(".slide");
//   let currentSlide = 0;

//   // Show the first slide
//   showSlide(currentSlide);

//   // Event listeners
//   submitButton.addEventListener('click', showResults);
//   previousButton.addEventListener("click", showPreviousSlide);
//   nextButton.addEventListener("click", showNextSlide);
// })();
