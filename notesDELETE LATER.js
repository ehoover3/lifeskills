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

//circle1.addEventListener("click", clickCircle1);
// let clickCircle1 = function (event) {};

// CLICK LISTENERS
// function m_listeners() {
//   circle1.addEventListener("click", clickCircle1);
// }
// m_listeners();



<!--
    <h4>&#128049;cat</h4>
    <h4>&#128008;cat</h4>
    <h4>&#128576;cat</h4>
    <h4>&#128585;monkey</h4>
    <h4>&#128021;dog</h4>
    <h4>&#128075;hand</h4>
    <h4>&#128700;baby</h4>
    <h4>&#128582;arms</h4>
    <h4>&#128084;clothes</h4>
    <h4>&#128100;face</h4>
    <h4>&#128104;face</h4>
    <h4>&#128105;face</h4>
    <h4>&#128102;face - kid</h4>
    <h4>&#128103;face - kid</h4>
    <h4>&#128099;feet</h4>
    <h4>&#128694;walking gate</h4>
    <h4>&#128663;car</h4>
    <h4>&#128172;words</h4>
    <h4>&#128173;thoughts</h4>
    <h4>&#128719;bed</h4> 
    <h4>&#128506;world map</h4> 
    <h4>&#128736;wrench and hammer</h4> 
    <h4>&#128142;gem</h4> 
  -->
