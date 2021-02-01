// What if I can spend gems on upgranding my home?
// What if I can spend gems on upgrading my community?
// i.e. playground, fitness park, walking trail, performance stage
// i.e. pre-school, community garden

// maybe I can buy clothes and give others clothes
// an interactive marketplace like Runescape & learn finance, economics
// what if I could group fund projects in-game
// like I need x number of coins, but also community support

// TO DO:  Debug why clicking Dog, Cat, Monkey in the dropdown works once, but not after that
// TO DO:  Randomize where answer images
// TO DO:  Add keypress event for clicking an answer & checking the answer
// TO DO:  Outline the dropbox items that is selected & make it the top option in the dropbox

// TO DO:  USE QUIZ INHERITANCE that EXTEND THE BASE QUIZ

// Object UserInformation
//  methods to push info to database... can update via JS
//    streak
//    points    functions that add point to browser.  functions that update the database.
//    currency

// TO DO:  Use classes and connect those with the functions
// TO DO:  Use template literals, then intersperse variables within it
// TO DO:  Eliminate the number of middle_circles... instead use flexbox and change the spacing... use row DIVs (CSS :first-child)

// THINK:  What is the smallest possible concept I can fit on this class
// THINK:  Figure out how to reuse classes on the various pages
// THINK:  Think about inserting and removing things from the page, with classes using the event listeners for you
// THINK:  Use internal processing to update the values
// THINK:  Have very few global variables... instead use an instance variable and access them
// THINK:  Have a main page controller... with the major variables... then the quiz updates that main page
// THINK:  Main controller... on quiz complete... w/ info about completed quiz... that can go and get the scoreboard object for the page and do stuff with that.
// THINK:  When a quiz is complete... it triggers the main controller listener.  So have an onquiz complete function.
// THINK:  let the users interaction lead to when the event is called.

// THINK:  What does the class need to know about... click events... html elements... reduce reuse of code... make code more legible
// THINK:  more legible functions... verbThing format

// CLASS
// bind functions

// OUTLINE
// write down each class, instance variables, methods, and purposes for class, variable, and method

// INSTANCE VARIABLES
// think about what data you need to store and what format to store it in
// gemCount
// METHODS
// pull data from the database
// sync data with class database (give 5 sec window to handle asynchronous database i.e. rapid purchases)
// update internal database, wait 5 seconds, then sync external database
// but if another internal database thing occurs, reset waiting 5 seconds (for handling rapid purchasing)
// DATABASES... load a new page... asks server about your account.
// DATABASES... creating a data base for user information.

// METHODS
// exit button
// clicking an answer box
// clicking the skip button
// clicking the check buttom > show feedback
// finishing the quiz > show quiz results & update points, gems, etc.

class UserDatabase {
  constructor(crownCount, streakCount, heartCount, gemCount, pointCount) {
    this.crownCount = 5;
    this.streakCount = 6;
    this.heartCount = 5;
    this.gemCount = 7;
    this.pointCount = 10;
  }
}

class MainPage {
  constructor() {
    this.HTMLtemplateLiteral = `
  <div class = "main">

    <div class = "m_top">
      <div class = "m_subject">&#128054;</div>
      <div class = "m_crown">&#128081;${newUser.crownCount}</div>
      <div class = "m_streak">&#128293;${newUser.streakCount}</div>
      <div class = "m_heart">&#128420;${newUser.heartCount}</div>
    </div>
 
    <div class = "m_middle">
      <div class = "m_row1">
        <div class = "m_circle1">CLICK</div>
      </div>
      <div class = "m_row2">
        <div class = "m_circle2"></div>
        <div class = "m_circle3"></div>
      </div>
      <div class = "m_row3">
        <div class = "m_circle4"></div>
        <div class = "m_circle5"></div>
      </div>
    </div>

    <div class = "m_bottom">
      <div class = "m_quiz">&#128218;</div>
      <div class = "m_story">&#128506;</div>
      <div class = "m_profile">&#127968;</div>
      <div class = "m_league">&#127967;</div>
      <div class = "m_shop">&#127974;</div>
    </div>

    </div>
  </div>`;
  }
  renderHTML() {
    return (document.body.innerHTML = this.HTMLtemplateLiteral);
  }
}

class QuizGame {
  constructor(
    widgetNode,
    quizData,
    progressBarPercent,
    heartCount,
    questionNumber,
    circle1
  ) {
    this.quizData = 4;
    this.questionNumber = 0;
    this.progressBarPercent = 4;
    this.heartCount = 5;
    this.circle1 = document.querySelector(".m_circle1");
    // TRYING TO ATTACH A LISTENER TO THE CLASS
    this.widgetNode
      .querySelector(".m_circle1")
      .addEventListener("click", this.clickCircle1.bind(this));
  }
  // TRYING TO HAVE A CLICK EVENT FUNCTION RUN WHEN LISTENER IS CLICKED
  clickCircle1() {
    renderQuiz();
  }
}

// RENDER PAGE
let newUser = new UserDatabase(5, 6, 7, 10);
let mainPage = new MainPage();
mainPage.renderHTML();

function renderQuiz() {
  markup = `

<div class = "quiz">

  <div class="q_top">
    <div class = "q_exit">X</div>
    <div class = "q_myFullBar">
      <div class = "q_myBar"></div>
    </div>
    <div class="q_heart">&#128420;5</div>
  </div>

  <div class="q_middle">
    <div class= "q_question">QUESTION 1</div>
    <div class = "q_answerBox">

      <div class = "q_answer1">
        <img class = "q_answer1_image" src = "/images/dog.png" alt = "/images/dog.png"></img>
        <div class = "q_answer1_text">ANSWER 1</div>
      </div>

      <div class = "q_answer2">
        <img class = "q_answer2_image" src = "/images/dog.png" alt = "/images/dog.png" ></img>
        <div class = "q_answer2_text">ANSWER 2</div>
      </div>

      <div class = "q_answer3">
        <img class = "q_answer3_image" src = "/images/dog.png" alt = "/images/dog.png"></img>
        <div class = "q_answer3_text">ANSWER 3</div>
      </div>

      <div class = "q_answer4">
        <img class = "q_answer4_image" src = "/images/dog.png" alt = "/images/dog.png" ></img>
        <div class = "q_answer4_text">ANSWER 4</div>
      </div>
    </div>
  </div>

  <div class = "q_bottom">
      <div class = "q_skipButton">
        <div class = "q_skipButton_text">SKIP</div>
      </div>
      <div class = "q_checkButton">
        <div class = "q_checkButton_text">CHECK</div>
      </div>
  </div>

</div>
`;
  document.body.innerHTML = markup;
}

//circle1.addEventListener("click", clickCircle1);
// let clickCircle1 = function (event) {};

// CLICK LISTENERS
// function m_listeners() {
//   circle1.addEventListener("click", clickCircle1);
// }
// m_listeners();
