var readlineSync = require("readline-sync");

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to F.R.I.E.N.D.S. Quiz  ");
  game(userName);
}

var score = 0;

var highScores = {
    name: "Anshika",
    score: 3,
}
// array of objects
var questions = [{
  question: "Which character has a twin? ",
  options: {
    a: "Monica",
    b: "Chandler",
    c: "Phoebe"
  },
  answer: "c"
}, 
{
  question: "How many sisters does Joey have? ",
  options: {
    a: "8",
    b: "7",
    c: "9"
  },
  answer: "b"
},
{
  question: "What nickname did Monica’s dad give her? ",
  options: {
    a: "Tiny Harmonica",
    b: "Little Electronica",
    c: "Little Harmoica"
  },
  answer: "c"
},
{
  question: "What's the name of the dancer Joey lived with? ",
  options: {
    a: "Janice",
    b: "Janine",
    c: "Chandler"
  },
  answer: "b"
},
{
  question: "What’s Phoebe’s sister’s name? ",
  options: {
    a: "Ariel",
    b: "Ursula",
    c: "Janine"
  },
  answer: "b"
},
];


// play function
function play(question, answer, options) {
  console.log(question);
  
  for(const key in options){
    console.log(`${key}  : ${options[key]}`);
  }
    
  var userAnswer = readlineSync.question("Choose you option: ");

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
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
    play(currentQuestion.question, currentQuestion.answer, currentQuestion.options)
  }
  showScores(userName);
}

function showScores(userName) {
  console.log("YAY! You SCORED: ", score);

  if(highScores.score <= score)
  {
    highScores.name = userName;
    highScores.score = score;
  }
  console.log("Check out the high scores!");
  console.log(highScores.name, " : ", highScores.score);
}

welcome();


