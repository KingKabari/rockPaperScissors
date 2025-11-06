document.addEventListener("DOMContentLoaded", function() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
const choices = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomIndex];
  return choices[randomIndex];
}

/*function getHumanChoice() {
  let humanChoice = prompt("Please enter rock, paper or scissors");
  humanChoice = humanChoice.toLowerCase();
  alert(`You chose ${humanChoice}`);
  console.log(`You chose ${humanChoice}`);
  return humanChoice;
}*/

function playRound(humanChoice, computerChoice) {
 const resultsDiv = document.getElementById("results");
  if (humanChoice === computerChoice) {
    resultsDiv.textContent = "It's a tie!";
    return "tie";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    return "human";
  } else {
    resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    return "computer";
  }
}

function updateScore() {
  document.getElementById("score").textContent = `Score — You: ${humanScore}, Computer: ${computerScore}`;
}

  function checkWinner() {
  const winnerDiv = document.getElementById("winner");
  if (humanScore >= 5) {
    winnerDiv.textContent = "🎉 You win the game!";
    disableButtons();
  } else if (computerScore >= 5) {
    winnerDiv.textContent = "Computer wins the game!";
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rockBtn").disabled = true;
  document.getElementById("paperBtn").disabled = true;
  document.getElementById("scissorsBtn").disabled = true;
}

document.getElementById("rockBtn").addEventListener("click", function() {
  const playerChoice = "rock";
  const computerChoice = getComputerChoice();
  const winner = playRound(playerChoice, computerChoice);
  if (winner === "human") humanScore++;
  else if (winner === "computer") computerScore++;
  updateScore();
  checkWinner();
});
document.getElementById("paperBtn").addEventListener("click", function() {
  const playerChoice = "paper";
  const computerChoice = getComputerChoice();
  const winner = playRound(playerChoice, computerChoice);
  if (winner === "human") humanScore++;
  else if (winner === "computer") computerScore++;
  updateScore();
  checkWinner();
});
document.getElementById("scissorsBtn").addEventListener("click", function() {
  const playerChoice = "scissors";
  const computerChoice = getComputerChoice();
  const winner = playRound(playerChoice, computerChoice);
  if (winner === "human") humanScore++;
  else if (winner === "computer") computerScore++;
  updateScore();
  checkWinner();
});

// Initial score display
updateScore();
});

/*for (let round = 1; round <= 5; round++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const winner = playRound(humanSelection, computerSelection);

  if (winner === "human") {
      humanScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
  }
  // Declare overall winner
  if (humanScore > computerScore) {
    alert(`You win the game! Final Score: Human ${humanScore}, Computer ${computerScore}`);
    console.log(`You win the game! Final Score: Human ${humanScore}, Computer ${computerScore}`);
  } else if (computerScore > humanScore) {
    alert(`Computer wins the game! Final Score: Human ${humanScore}, Computer ${computerScore}`);
    console.log(`Computer wins the game! Final Score: Human ${humanScore}, Computer ${computerScore}`);
  } else {
    alert(`The game is a tie! Final Score: Human ${humanScore}, Computer ${computerScore}`);
    console.log(`The game is a tie! Final Score: Human ${humanScore}, Computer ${computerScore}`);
  } */


