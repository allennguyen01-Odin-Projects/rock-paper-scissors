let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

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
	let scoreString = `Score: ${playerScore}-${computerScore}`;

	if (playerScore < 5 && computerScore < 5) {
		roundCount++;

		const computerSelection = getComputerChoice();
		const playerSelection = this.textContent;

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
		scoreString = `Score: ${playerScore}-${computerScore}`;

		console.log(`Round ${roundCount}`);
		console.log(`Player's move: ${playerSelection}.`);
		console.log(`Computer's move: ${computerSelection}.`);
		console.log(returnString);
		console.log(`Current ${scoreString}`);

		const round = document.getElementById("round");
		const playersMove = document.getElementById("players-move");
		const computerMove = document.getElementById("computers-move");
		const score = document.getElementById("score");

		round.textContent = `Round ${roundCount}`;
		playersMove.textContent = `Your move: ${playerSelection}`;
		computerMove.textContent = `Computer's move: ${computerSelection}`;
		score.textContent = scoreString;
	} else {
		let winnerString = "";
		scoreString = `Score: ${playerScore}-${computerScore}`;

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

		console.log(winnerString);
		const winner = document.getElementById("winner");
		winner.textContent = winnerString;
	}
}

addButtonEventListeners();
