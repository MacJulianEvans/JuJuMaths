let time = 0;
let timer;
let score = 0;
let totalQuestions = 20;
let currentQuestion = 0;
let correctAnswer;

function startGame() {
  timer = setInterval(() => {
    time++;
    document.getElementById("timer").innerText = "Time: " + time + "s";
  }, 1000);
  nextQuestion();
}

function randomQuestion() {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let operations = ["+", "-", "*", "/"];
  let op = operations[Math.floor(Math.random() * operations.length)];

  if (op === "+") correctAnswer = num1 + num2;
  else if (op === "-") correctAnswer = num1 - num2;
  else if (op === "*") correctAnswer = num1 * num2;
  else if (op === "/") {
    num1 = num1 * num2; // ensures clean division
    correctAnswer = num1 / num2;
  }

  document.getElementById("question").innerText = `${num1} ${op} ${num2} = ?`;
}

function checkAnswer() {
  let userAnswer = parseFloat(document.getElementById("answer").value);
  if (userAnswer === correctAnswer) {
    score++;
  }
  currentQuestion++;
  document.getElementById("score").innerText = `Score: ${score}/${currentQuestion}`;
  document.getElementById("answer").value = "";
  if (currentQuestion < totalQuestions) {
    nextQuestion();
  } else {
    endGame();
  }
}

function nextQuestion() {
  randomQuestion();
}

function endGame() {
  clearInterval(timer);
  document.getElementById("end").innerText =
    `Game Over! Final Score: ${score}/${totalQuestions} in ${time} seconds`;
  document.getElementById("question").innerText = "";
  document.getElementById("answer").style.display = "none";
}

// Start automatically when page loads
window.onload = startGame;
