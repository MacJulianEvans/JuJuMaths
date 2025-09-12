let time = 60;           // 1-minute timer
let timer;
let score = 0;
let correctAnswer;

function startGame() {
  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = "Time: " + time + "s";
    if (time <= 0) endGame();
  }, 1000);
  nextQuestion();
}

// Generate random arithmetic question (like Math Dash)
function randomQuestion() {
  let num1 = Math.floor(Math.random() * 20) + 1;
  let num2 = Math.floor(Math.random() * 20) + 1;
  let operations = ["+", "-", "*"];
  let op = operations[Math.floor(Math.random() * operations.length)];

  if (op === "+") correctAnswer = num1 + num2;
  else if (op === "-") correctAnswer = num1 - num2;
  else if (op === "*") correctAnswer = num1 * num2;

  document.getElementById("question").innerText = `${num1} ${op} ${num2} = ?`;
}

function checkAnswer() {
  let userAnswer = parseFloat(document.getElementById("answer").value);
  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("answer").value = "";
    nextQuestion();
  } else {
    endGame(); // stop immediately on wrong answer
  }
}

function nextQuestion() {
  randomQuestion();
}

function endGame() {
  clearInterval(timer);
  document.getElementById("end").innerText = 
    `Game Over! You scored ${score} in ${60 - time}s`;
  document.getElementById("question").innerText = "";
  document.getElementById("answer").style.display = "none";
}

// Start automatically
window.onload = startGame;
