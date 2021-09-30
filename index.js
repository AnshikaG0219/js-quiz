var readlineSync = require("readline-sync");

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Anshika?");
  game(userName);
}

var score = 0;

var highScores = {
    name: "Anshika",
    score: 3,
}


// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Delhi"
}, {
  question: "My favorite framework would be? ",
  answer: "Reactjs"
},
{
  question: "What is my first name? ",
  answer: "Anshika"
}];


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
  }
  else {
    console.log("wrong!");
  }

  console.log("*--------------------------*")
  console.log("current score: ", score);
  console.log("*--------------------------*")
}

function game(userName) {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
  showScores(score, userName);
}

function showScores(currScore, userName) {
  console.log("YAY! You SCORED: ", score);

  if(highScores.score <= currScore)
  {
    highScores.name = userName;
    highScores.score = currScore;
  }
  console.log("Check out the high scores!");
  console.log(highScores.name, " : ", highScores.score);
}

welcome();


