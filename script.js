let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['stone', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = `You chose: ${emoji(userChoice)} ${capitalize(userChoice)}`;
  document.getElementById("computer-choice").textContent = `Computer chose: ${emoji(computerChoice)} ${capitalize(computerChoice)}`;

  const result = getResult(userChoice, computerChoice);
  document.getElementById("outcome").textContent = `Result: ${result}`;

  if (result === "You Win!") userScore++;
  else if (result === "Computer Wins!") computerScore++;

  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function getResult(user, computer) {
  if (user === computer) return "It's a Tie!";
  if (
    (user === "stone" && computer === "scissors") ||
    (user === "paper" && computer === "stone") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  } else {
    return "Computer Wins!";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function emoji(choice) {
  switch(choice) {
    case "stone": return "🪨";
    case "paper": return "📄";
    case "scissors": return "✂️";
  }
}
