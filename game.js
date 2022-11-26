let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const round = document.getElementById("round");
const playersMove = document.getElementById("players-move");
const computerMove = document.getElementById("computers-move");
const roundResult = document.getElementById("round-result");
const score = document.getElementById("score");
const winner = document.getElementById("winner");

function getComputerChoice() {
	const CHOICES = ["Rock", "Paper", "Scissors"];
	let randomChoice = Math.floor(Math.random() * CHOICES.length);
	let computerChoice = CHOICES[randomChoice];

	return computerChoice;
}

function addButtonEventListeners() {
	const buttons = document.querySelectorAll("button");
	buttons.forEach((button) => {
		button.addEventListener("click", game);
	});
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	playerSelection =
		playerSelection[0].toUpperCase() + playerSelection.slice(1);

	let returnString = "";
	let outcome = "";

	if (playerSelection === computerSelection) {
		outcome = "T";
	} else if (playerSelection === "Rock") {
		if (computerSelection === "Paper") {
			outcome = "L";
		} else if (computerSelection === "Scissors") {
			outcome = "W";
		}
	} else if (playerSelection === "Paper") {
		if (computerSelection === "Scissors") {
			outcome = "L";
		} else if (computerSelection === "Rock") {
			outcome = "W";
		}
	} else if (playerSelection === "Scissors") {
		if (computerSelection === "Rock") {
			outcome = "L";
		} else if (computerSelection === "Paper") {
			outcome = "W";
		}
	}

	switch (outcome) {
		case "W":
			returnString = `You win! ${playerSelection} beats ${computerSelection}.`;
			break;
		case "L":
			returnString = `You lose! ${computerSelection} beats ${playerSelection}.`;
			break;
		case "T":
			returnString = `You tie! Both chose ${playerSelection}.`;
			break;
		default:
			break;
	}

	return [returnString, outcome];
}

function game() {
	let scoreString = `score: ${playerScore}-${computerScore}`;

	if (playerScore < 5 && computerScore < 5) {
		roundCount++;

		const computerSelection = getComputerChoice();
		const buttonID = this.id;
		switch (buttonID) {
			case "rock-btn":
				playerSelection = "Rock";
				break;
			case "paper-btn":
				playerSelection = "Paper";
				break;
			case "scissors-btn":
				playerSelection = "Scissors";
				break;
			default:
				playerSelection = "ERROR";
				break;
		}
		console.log(playerSelection);

		const [returnString, outcome] = playRound(
			playerSelection,
			computerSelection
		);

		switch (outcome) {
			case "W":
				playerScore++;
				break;
			case "L":
				computerScore++;
			default:
				break;
		}
		scoreString = `score: ${playerScore}-${computerScore}`;

		console.log(`Round ${roundCount}`);
		console.log(`Player's move: ${playerSelection}.`);
		console.log(`Computer's move: ${computerSelection}.`);
		console.log(returnString);
		console.log(`Current ${scoreString}`);
		round.textContent = `Round: ${roundCount}`;
		playersMove.textContent = `Your move: ${playerSelection}`;
		computerMove.textContent = `Computer's move: ${computerSelection}`;
		roundResult.textContent = returnString;
		score.textContent = `${scoreString}`;
	} else {
		let winnerString = "";
		scoreString = `score: ${playerScore}-${computerScore}`;

		switch (true) {
			case playerScore > computerScore:
				winnerString = `You win! Final ${scoreString}`;
				break;
			case playerScore < computerScore:
				winnerString = `You lose! Final ${scoreString}`;
				break;
			default:
				break;
		}
		round.textContent = `Round: ${roundCount}`;
		playersMove.style.display = "none";
		computerMove.style.display = "none";
		roundResult.style.display = "none";
		score.style.display = "none";
		winner.textContent = winnerString;

		console.log(winnerString);
	}
}

addButtonEventListeners();
