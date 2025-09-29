function getComputerChoice() {
const choices = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomIndex];
console.log(`Computer chose ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  let answer = prompt("Please enter rock, paper or scissors");
  answer = answer.toLowerCase();
  alert(`You chose ${answer}`);
  console.log(`You chose ${answer}`);
  return answer;
}

getHumanChoice();
getComputerChoice();