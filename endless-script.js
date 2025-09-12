let count = 0;
let correctAnswer;

// Start game immediately
function startGame() {
  nextQuestion();
}

// Generate random arithmetic question (or you can mix with algebra later)
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

// Check the player's answer
function checkAnswer() {
  let userAnswer = parseFloat(document.getElementById("answer").value);
  if (userAnswer === correctAnswer) {
    count++;
    document.getElementById("count").innerText = `Questions answered: ${count}`;
    document.getElementById("answer").value = "";
    nextQuestion();
  } else {
    endGame();
  }
}

// Show next question
function nextQuestion() {
  randomQuestion();
}

// End game when wrong answer is given
function endGame() {
  document.getElementById("end").innerText = `You made a mistake! You answered ${count} questions correctly.`;
  document.getElementById("question").innerText = "";
  document.getElementById("answer").style.display = "none";
}

// Start automatically
window.onload = startGame;
