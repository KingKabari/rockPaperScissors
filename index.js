
function getComputerChoice() {
const choices = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomIndex];
alert(`Computer chose ${computerChoice}`);
console.log(`Computer chose ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Please enter rock, paper or scissors");
  humanChoice = humanChoice.toLowerCase();
  alert(`You chose ${humanChoice}`);
  console.log(`You chose ${humanChoice}`);
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

function playRound(humanChoice, computerChoice) {
 if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie";
  }

  // Human wins cases
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "human";
  }

// Computer wins cases
  else
  console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  return "computer";
}

for (let round = 1; round <= 5; round++) {
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
  }
}

playGame();