let playerScore = 0;
let computerScore = 0;
let round = 0;

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
		console.log(`Round ${round}`);
		round++;
		const computerSelection = getComputerChoice();
		const playerSelection = this.textContent;

		console.log(`Player's move: ${playerSelection}.`);
		console.log(`Computer's move: ${computerSelection}.`);

		const [returnString, outcome] = playRound(
			playerSelection,
			computerSelection
		);
		console.log(returnString);

		switch (outcome) {
			case "W":
				playerScore++;
				break;
			case "L":
				computerScore++;
			default:
				break;
		}
		console.log(`Current ${scoreString}`);
	} else {
		let winnerString = "";
		if (playerScore > computerScore) {
			winnerString = `You win! Final ${scoreString}`;
		} else if (computerScore > playerScore) {
			winnerString = `You lose! Final ${scoreString}`;
		} else {
			winnerString = `You tie! Final ${scoreString}`;
		}
		console.log(winnerString);
	}
}

addButtonEventListeners();
