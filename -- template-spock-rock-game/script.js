// the score and the choice of the player
const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");

// the score and the choice of the computer
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");

// items for the player
const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

// items for the computer
const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

// select the rounds
const selectRound = document.getElementById("round");

// all icons
const allGameIcons = document.querySelectorAll(".far");

// choose the round

// the result div
const resultText = document.getElementById("resultText");
const winnerText = document.getElementById("winner-text");

// ---------------------

let computerChoice = "";

// scores for
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let totalRounds = 0;
let gameFinished = false;

// game logic
const choices = {
	rock: { name: "Rock", defeats: ["scissors", "lizard"] },
	paper: { name: "Paper", defeats: ["rock", "spock"] },
	scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
	lizard: { name: "Lizard", defeats: ["paper", "spock"] },
	spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

// function starttheGame() {
// 	if (selectRound.value === 0) {
// 		alert("Please select round");
// 	}
// }

//reset the selected icons
function resetSelected() {
	allGameIcons.forEach((icon) => icon.classList.remove("selected"));
}

// select for the computer
function selectComputer() {
	const randomNum = Math.floor(Math.random() * 5);
	const computerChoices = ["rock", "paper", "scissors", "lizard", "spock"];
	computerChoice = computerChoices[randomNum];
	switch (computerChoice) {
		case "rock":
			computerRock.classList.add("selected");
			computerChoiceEl.textContent = "--- rock";
			break;
		case "paper":
			computerPaper.classList.add("selected");
			computerChoiceEl.textContent = "--- paper";
			break;
		case "scissors":
			computerScissors.classList.add("selected");
			computerChoiceEl.textContent = "--- scissors";
			break;
		case "spock":
			computerSpock.classList.add("selected");
			computerChoiceEl.textContent = "--- spock";
			break;
		case "lizard":
			computerLizard.classList.add("selected");
			computerChoiceEl.textContent = "--- lizard";
			break;
		default:
			break;
	}
}

let rounds = 0;

function playRound() {
	selectRound.addEventListener("change", () => {
		let rounds = selectRound.value;
		if (totalRounds < rounds) {
			console.log(rounds);
			finishtheGame(playerChoice);
		} else {
			if (choices[playerChoice].defeats.includes(computerChoice)) {
				playerScoreNumber++;
				playerScoreEl.textContent = playerScoreNumber;
			} else if (choices[computerChoice].defeats.includes(playerChoice)) {
				computerScoreNumber++;
				computerScoreEl.textContent = computerScoreNumber;
			} else {
				resultText.textContent = "It is a tie!";
				winnerText.textContent = " -- ";
			}
		}
	});
}

function finishtheGame(rounds) {
	if (totalRounds < rounds) {
		if (choices[playerChoice].defeats.includes(computerChoice)) {
			winnerText.textContent = `You won!`;
			resultText.textContent = `${playerChoice} beats ${computerChoice}!`;
		} else if (choices[computerChoice].defeats.includes(playerChoice)) {
			winnerText.textContent = `Computer won!`;
			resultText.textContent = `${computerChoice} beats ${playerChoice}!`;
		}
	}
}

// buraya parametre olarak round verdigimde select() tanimlanmadi diyor

// settheRounds() functioni buraya aktardigimda rounds tanimlanmadi diyor
function checkResults(playerChoice, rounds) {
	// settheRounds();
	// starttheGame();
	resetSelected();
	selectComputer();
	playRound(rounds);
	finishtheGame(rounds);
}

// Passing player choice and icon

function select(playerChoice) {
	checkResults(playerChoice);

	switch (playerChoice) {
		case "rock":
			playerRock.classList.add("selected");
			playerChoiceEl.textContent = "--- rock";
			break;
		case "paper":
			playerPaper.classList.add("selected");
			playerChoiceEl.textContent = "--- paper";
			break;
		case "scissors":
			playerScissors.classList.add("selected");
			playerChoiceEl.textContent = "--- scissors";
			break;
		case "spock":
			playerSpock.classList.add("selected");
			playerChoiceEl.textContent = "--- spock";
			break;
		case "lizard":
			playerLizard.classList.add("selected");
			playerChoiceEl.textContent = "--- lizard";
			break;
		default:
			break;
	}
}

window.select = select;
