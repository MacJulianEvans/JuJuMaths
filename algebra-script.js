let time = 0;
let timer;
let score = 0;
let totalQuestions = 10;
let currentQuestion = 0;
let correctAnswer;

function startGame() {
  timer = setInterval(() => {
    time++;
    document.getElementById("timer").innerText = "Time: " + time + "s";
  }, 1000);
  nextQuestion();
}

// Generate random algebra equation: ax + b = c
function randomAlgebraQuestion() {
  let a = Math.floor(Math.random() * 10) + 1;       // coefficient 1-10
  let x = Math.floor(Math.random() * 20) - 5;       // solution -5 to 14
  let b = Math.floor(Math.random() * 20) - 10;      // constant -10 to 9
  let c = a * x + b;

  correctAnswer = x;
  let eq = `${a}x ${b >= 0 ? "+ " + b : "- " + Math.abs(b)} = ${c}`;
  document.getElementById("question").innerText = eq;
}

function checkAnswer() {
  let userAnswer = parseFloat(document.getElementById("answer").value);
  if (userAnswer === correctAnswer) score++;

  currentQuestion++;
  document.getElementById("score").innerText = `Score: ${score}/${currentQuestion}`;
  document.getElementById("answer").value = "";

  if (currentQuestion < totalQuestions) nextQuestion();
  else endGame();
}

function nextQuestion() {
  randomAlgebraQuestion();
}

function endGame() {
  clearInterval(timer);
  document.getElementById("end").innerText =
    `Game Over! Final Score: ${score}/${totalQuestions} in ${time} seconds`;
  document.getElementById("question").innerText = "";
  document.getElementById("answer").style.display = "none";
}

// Start automatically
window.onload = startGame;
