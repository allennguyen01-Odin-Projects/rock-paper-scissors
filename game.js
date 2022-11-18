function getComputerChoice() {
	const CHOICES = ["Rock", "Paper", "Scissors"];
	let randomChoice = Math.floor(Math.random() * CHOICES.length);
	let computerChoice = CHOICES[randomChoice];

	return computerChoice;
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	playerSelection =
		playerSelection[0].toUpperCase() + playerSelection.slice(1);

	let returnString = "";

	if (playerSelection === computerSelection) {
		returnString = `Tie! Both chose ${playerSelection}.`;
	} else if (playerSelection === "Rock") {
		if (computerSelection === "Paper") {
			returnString = `You lose! ${computerSelection} beats ${playerSelection}.`;
		} else if (computerSelection === "Scissors") {
			returnString = `You win! ${playerSelection} beats ${computerSelection}.`;
		}
	} else if (playerSelection === "Paper") {
		if (computerSelection === "Rock") {
			returnString = `You win! ${playerSelection} beats ${computerSelection}.`;
		} else if (computerSelection === "Scissors") {
			returnString = `You lose! ${computerSelection} beats ${playerSelection}.`;
		}
	} else if (playerSelection === "Scissors") {
		if (computerSelection === "Rock") {
			returnString = `You lose! ${computerSelection} beats ${playerSelection}.`;
		} else if (computerSelection === "Paper") {
			returnString = `You win! ${playerSelection} beats ${computerSelection}.`;
		}
	}

	return returnString;
}

function game() {}

const playerSelection = "papEr ";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
