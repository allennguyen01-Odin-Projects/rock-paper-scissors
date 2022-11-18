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
	let outcome = "";

	if (playerSelection === computerSelection) {
		returnString = `You tie! Both chose ${playerSelection}.`;
		outcome = "T";
	} else if (playerSelection === "Rock") {
		if (computerSelection === "Paper") {
			returnString = `You lose! ${computerSelection} beats ${playerSelection}.`;
			outcome = "L";
		} else if (computerSelection === "Scissors") {
			returnString = `You win! ${playerSelection} beats ${computerSelection}.`;
			outcome = "W";
		}
	} else if (playerSelection === "Paper") {
		if (computerSelection === "Rock") {
			returnString = `You win! ${playerSelection} beats ${computerSelection}.`;
			outcome = "W";
		} else if (computerSelection === "Scissors") {
			returnString = `You lose! ${computerSelection} beats ${playerSelection}.`;
			outcome = "L";
		}
	} else if (playerSelection === "Scissors") {
		if (computerSelection === "Rock") {
			returnString = `You lose! ${computerSelection} beats ${playerSelection}.`;
			outcome = "L";
		} else if (computerSelection === "Paper") {
			returnString = `You win! ${playerSelection} beats ${computerSelection}.`;
			outcome = "W";
		}
	}

	return [returnString, outcome];
}

function game() {
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 1; i <= 5; i++) {
		console.log(`Round ${i}`);
		const playerSelection = prompt("What's your move?");
		console.log(`Player's move: ${playerSelection}.`);
		const computerSelection = getComputerChoice();
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
	}

	let winnerString = "";

	if (playerScore > computerScore) {
		winnerString = `You win! Score: ${playerScore}-${computerScore}`;
	} else if (computerScore > playerScore) {
		winnerString = `You lose! Score: ${computerScore}-${playerScore}`;
	} else {
		winnerString = `You tie! Score: ${playerScore}-${computerScore}`;
	}
	console.log(winnerString);
}

game();
