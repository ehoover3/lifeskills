// Color Variables
const swan = "#e5e5e5"; //color code: a2
const hare = "#afafaf"; //color code: a3
const wolf = "#777777"; //color code: a4
const eel = "#4b4b4b"; //color code: a5
const featherGreen = "#58cc02"; // color code: d5

// Audio Variables
// (ADD SOUND HERE)

// State Variables
const { useState, useEffect } = React;

//explore useRef hook   how to save info from the dom using useRef

// HANDLE OVERLAY
function openNav() {
  document.querySelector(".overlay").style.height = "21%";
  console.log("testnav1");
}

function closeNav() {
  document.querySelector(".overlay").style.height = "0%";
  console.log("testnav2");
}

const App = (props) => {
  let [i, seti] = useState(1); // starts at 0, then

  //MOUNT COMPONENT
  useEffect(() => {
    document.querySelector(".question").innerHTML = info[0].question;
    document.querySelector(".answer1_image").src = info[0].images.b;
    document.querySelector(".answer2_image").src = info[0].images.b;
    document.querySelector(".answer3_image").src = info[0].images.c;
    document.querySelector(".answer4_image").src = info[0].images.d;
    document.querySelector(".answer1_text").innerHTML = info[0].answer.a;
    document.querySelector(".answer2_text").innerHTML = info[0].answer.b;
    document.querySelector(".answer3_text").innerHTML = info[0].answer.c;
    document.querySelector(".answer4_text").innerHTML = info[0].answer.d;
  }, []);

  // HANDLE KEYPRESS
  useEffect(() => {
    2;
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      // Progress to the next question slide (part 2 of 2)
      document.querySelector(".question").innerHTML = info[i].question;

      // this could be a template literal... potentially...
      document.querySelector(".answer1_image").src = info[i].images.a;
      document.querySelector(".answer2_image").src = info[i].images.b;
      document.querySelector(".answer3_image").src = info[i].images.c;
      document.querySelector(".answer4_image").src = info[i].images.d;

      document.querySelector(".answer1_text").innerHTML = info[i].answer.a;
      document.querySelector(".answer2_text").innerHTML = info[i].answer.b;
      document.querySelector(".answer3_text").innerHTML = info[i].answer.c;
      document.querySelector(".answer4_text").innerHTML = info[i].answer.d;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [i]);

  // KEY HANDLER
  const handleKeyDown = (e) => {
    if (e.key === "1") {
      if (document.querySelector(".checkBtn").innerHTML !== "CONTINUE") {
        document.querySelector(".answer1").style.backgroundColor = featherGreen;
        document.querySelector(".answer2").style.backgroundColor = eel;
        document.querySelector(".answer3").style.backgroundColor = eel;
        document.querySelector(".answer4").style.backgroundColor = eel;
        document.querySelector(
          ".checkBtn"
        ).style.backgroundColor = featherGreen;
        document.querySelector(".checkBtn").style.color = swan;
      }
    } else if (e.key === "2") {
      if (document.querySelector(".checkBtn").innerHTML !== "CONTINUE") {
        document.querySelector(".answer1").style.backgroundColor = eel;
        document.querySelector(".answer2").style.backgroundColor = featherGreen;
        document.querySelector(".answer3").style.backgroundColor = eel;
        document.querySelector(".answer4").style.backgroundColor = eel;
        document.querySelector(
          ".checkBtn"
        ).style.backgroundColor = featherGreen;
        document.querySelector(".checkBtn").style.color = swan;
      }
    } else if (e.key === "3") {
      if (document.querySelector(".checkBtn").innerHTML !== "CONTINUE") {
        document.querySelector(".answer1").style.backgroundColor = eel;
        document.querySelector(".answer2").style.backgroundColor = eel;
        document.querySelector(".answer3").style.backgroundColor = featherGreen;
        document.querySelector(".answer4").style.backgroundColor = eel;
        document.querySelector(
          ".checkBtn"
        ).style.backgroundColor = featherGreen;
        document.querySelector(".checkBtn").style.color = swan;
      }
    } else if (e.key === "4") {
      if (document.querySelector(".checkBtn").innerHTML !== "CONTINUE") {
        document.querySelector(".answer1").style.backgroundColor = eel;
        document.querySelector(".answer2").style.backgroundColor = eel;
        document.querySelector(".answer3").style.backgroundColor = eel;
        document.querySelector(".answer4").style.backgroundColor = featherGreen;
        document.querySelector(
          ".checkBtn"
        ).style.backgroundColor = featherGreen;
        document.querySelector(".checkBtn").style.color = swan;
      }
    } else if (e.key === "Enter") {
      // // GUARD CLAUSE: Has an answer been selected?  //NOTE: rgb(88, 204, 2) === featherGreen
      if (
        document.querySelector(".answer1").style.backgroundColor ===
          "rgb(88, 204, 2)" ||
        document.querySelector(".answer2").style.backgroundColor ===
          "rgb(88, 204, 2)" ||
        document.querySelector(".answer3").style.backgroundColor ===
          "rgb(88, 204, 2)" ||
        document.querySelector(".answer4").style.backgroundColor ===
          "rgb(88, 204, 2)"
      ) {
        // PRESSED ENTER && Info array HAS NOT reached last slide
        if (i !== info.length) {
          if (document.querySelector(".checkBtn").innerHTML !== "CONTINUE") {
            openNav();
            document.querySelector(".checkBtn").innerHTML = "CONTINUE";
          } else if (
            document.querySelector(".checkBtn").innerHTML === "CONTINUE"
          ) {
            // Reset answer box colors & checkbtn text
            console.log("test");
            document.querySelector(".answer1").style.backgroundColor = eel;
            document.querySelector(".answer2").style.backgroundColor = eel;
            document.querySelector(".answer3").style.backgroundColor = eel;
            document.querySelector(".answer4").style.backgroundColor = eel;
            document.querySelector(".checkBtn").style.backgroundColor = eel;
            document.querySelector(".checkBtn").style.backgroundColor = hare;
            document.querySelector(".checkBtn").style.color = wolf;
            document.querySelector(".checkBtn").innerHTML = "CHECK";

            // Progress to next question slide (part 1 of 2)
            seti(i + 1);
            closeNav();
          }
        }
        // PRESSED ENTER && Info array HAS reached last slide
        else if (i === info.length) {
          console.log("QUIZ COMPLETE SLIDE HERE");
        }
      }
    }
  };

  return (
    <React.Fragment>
      <div className="quiz">
        {/* top1 */}
        <div className="top1">
          <div className="exit">&times;</div>
          <div className="progressBarBox">
            <div className="progressBar">PROGRESS</div>
          </div>
          <div className="heart">HEART</div>
        </div>

        {/* top2 */}
        <div className="top2">
          <div className="achievement">NEW WORD</div>
          <div className="question">WHICH IS HAPPINESS?</div>
        </div>

        {/* middle */}
        <div className="middle">
          <div className="answer1">
            <img className="answer1_image" />
            <div className="answer1_text">test</div>
          </div>

          <div className="answer2">
            <img className="answer2_image" />
            <div className="answer2_text">test</div>
          </div>
          <div className="answer3">
            <img className="answer3_image" />
            <div className="answer3_text">test</div>
          </div>
          <div className="answer4">
            <img className="answer4_image" />
            <div className="answer4_text">test</div>
          </div>
        </div>

        {/* bottom */}
        <div className="bottom">
          <div className="checkBtn">CHECK</div>
        </div>
      </div>

      {/* overlay */}
      <div className="overlay"></div>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

let info = [
  {
    question: "Which dog is relaxed?",
    images: {
      a: "./images/dog1.jpg",
      b: "./images/dog12.jpg",
      c: "./images/dog3.jpg",
      d: "./images/dog13.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is submissive?",
    images: {
      a: "./images/dog3.jpg",
      b: "./images/dog10.jpg",
      c: "./images/dog2.jpg",
      d: "./images/dog7.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is happy?",
    images: {
      a: "/images/dog4.jpg",
      b: "/images/dog15.jpg",
      c: "/images/dog8.jpg",
      d: "/images/dog12.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is playful?",
    images: {
      a: "/images/dog5.jpg",
      b: "/images/dog8.jpg",
      c: "/images/dog7.jpg",
      d: "/images/dog1.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is submissive?",
    images: {
      a: "/images/dog6.jpg",
      b: "/images/dog7.jpg",
      c: "/images/dog13.jpg",
      d: "/images/dog9.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog wants alone time?",
    images: {
      a: "/images/dog7.jpg",
      b: "/images/dog6.jpg",
      c: "/images/dog15.jpg",
      d: "/images/dog2.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is stressed?",
    images: {
      a: "/images/dog8.jpg",
      b: "/images/dog14.jpg",
      c: "/images/dog10.jpg",
      d: "/images/dog7.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is terrified?",
    images: {
      a: "/images/dog9.jpg",
      b: "/images/dog2.jpg",
      c: "/images/dog6.jpg",
      d: "/images/dog5.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is scared and combative?",
    images: {
      a: "/images/dog10.jpg",
      b: "/images/dog9.jpg",
      c: "/images/dog8.jpg",
      d: "/images/dog4.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is alert?",
    images: {
      a: "/images/dog11.jpg",
      b: "/images/dog8.jpg",
      c: "/images/dog3.jpg",
      d: "/images/dog7.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is suspicious?",
    images: {
      a: "/images/dog12.jpg",
      b: "/images/dog5.jpg",
      c: "/images/dog1.jpg",
      d: "/images/dog10.jpg",
    },
    answer: {
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
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is territorial?",
    images: {
      a: "/images/dog14.jpg",
      b: "/images/dog11.jpg",
      c: "/images/dog1.jpg",
      d: "/images/dog4.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
  {
    question: "Which dog is ready to fight?",
    images: {
      a: "/images/dog15.jpg",
      b: "/images/dog8.jpg",
      c: "/images/dog11.jpg",
      d: "/images/dog12.jpg",
    },
    answer: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
    },
    correctAnswer: "1",
  },
];
