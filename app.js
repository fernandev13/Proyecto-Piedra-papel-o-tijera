function getComputerChoice() {
  const choiceRandom = Math.floor(Math.random() * 3);
  if (choiceRandom === 0) {
    return "piedra";
  } else if (choiceRandom === 1) {
    return "papel";
  } else {
    return "tijeras";
  }
}

//console.log(`Computer choice: ${getComputerChoice()}`);

function getHumanChoice() {
  let choiceUser = prompt("Elije: piedra, papel o tijeras");
  return choiceUser.toLowerCase();
}

//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "Empate";
    } else if (
      (humanChoice === "piedra" && computerChoice === "tijeras") ||
      (humanChoice === "tijeras" && computerChoice === "papel") ||
      (humanChoice === "papel" && computerChoice === "piedra")
    ) {
      humanScore++;
      return `Ganaste! ${humanChoice} vence a ${computerChoice}`;
    } else {
      computerScore++;
      return `Gana Computadora: ${computerChoice} vence a ${humanChoice}`;
    }
  }

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  // Resultado final
  console.log(`La computadora eligió: ${computerSelection}`);
  console.log(`Tu escogiste: ${humanSelection}`);

  console.log(`Puntuacion: -Human: ${humanScore}, -Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log(`Felicidades ganaste: ${humanScore} partidas`);
  } else if (humanScore < computerScore) {
    console.log(`La computadora gano ${computerScore} partidas`);
  } else {
    console.log("Empataron!");
  }
}

console.log(playGame());
console.log(playGame());
console.log(playGame());
