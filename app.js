const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const userName = document.getElementById("userName");
const welcomeText = document.querySelector("span");
const restartGame = document.getElementById("newGame");

const questions = [
  {
    question: "Which character has a twin? ",
    options: {
      a: "Monica",
      b: "Chandler",
      c: "Phoebe",
    },
    answer: "c",
  },
  {
    question: "How many sisters does Joey have? ",
    options: {
      a: "8",
      b: "7",
      c: "9",
    },
    answer: "b",
  },
  {
    question: "What nickname did Monica’s dad give her? ",
    options: {
      a: "Tiny Harmonica",
      b: "Little Electronica",
      c: "Little Harmoica",
    },
    answer: "c",
  },
  {
    question: "What's the name of the dancer Joey lived with? ",
    options: {
      a: "Janice",
      b: "Janine",
      c: "Chandler",
    },
    answer: "b",
  },
  {
    question: "What’s Phoebe’s sister’s name? ",
    options: {
      a: "Ariel",
      b: "Ursula",
      c: "Janine",
    },
    answer: "b",
  },
];

function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for (key in currentQuestion.options) {
      // ...add an HTML radio button
      answers.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${key}">
            ${key} :
            ${currentQuestion.options[key]}
          </label>`
      );
    }

    console.log(answers);

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
  console.log(output);
}

function showResults() {
  // gather answer containers from our quiz
  resultsContainer.style.height = "20vh";
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  let score = 0;

  // for each question...
  questions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.answer) {
      // add to the number of correct answers
      score++;

      // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = "red";
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `Wooho! You got ${score} out of ${questions.length} correct!`;
}
buildQuiz();

// Event listeners
submitButton.addEventListener("click", showResults);
userName.addEventListener("input", () => {
  welcomeText.innerText = userName.value;
});
restartGame.addEventListener("click", () => {
  window.location.reload();
});