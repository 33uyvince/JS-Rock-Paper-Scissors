const choiceBtnRock = document.getElementById("choice-btn-rock");
const choiceBtnPaper = document.getElementById("choice-btn-paper");
const choiceBtnsScissor = document.getElementById("choice-btn-scissor");
const ai = document.getElementById("ai");
const resultEl = document.getElementById("result");
const playerEl = document.getElementById("player");
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const hands = [rock, paper, scissors];

const playerChoices = [
    {
        button: choiceBtnRock,
        playerChoice: rock,
    },
    {
        button: choiceBtnPaper,
        playerChoice: paper,
    },
    {
        button: choiceBtnsScissor,
        playerChoice: scissors,
    },
];

playerChoices.forEach((data) => {
    data.button.addEventListener("click", () => {
        processPlayerChoice(data.playerChoice);
    });
});

function processPlayerChoice(playerChoice) {
    console.log(playerChoice);
    const aiChoice = computerTurn();
    playerEl.textContent = `Player: ${playerChoice}`;
    resultEl.textContent = result(playerChoice, aiChoice);
}

function computerTurn() {
    const randomNumber = Math.floor(Math.random() * 3);
    ai.innerHTML = "AI: " + hands[randomNumber];
    return hands[randomNumber];
}

function result(playerChoice, aiChoice) {
    if (playerChoice === aiChoice) {
        return "Draw!";
    } else if (
        (playerChoice === rock && aiChoice === scissors) ||
        (playerChoice === paper && aiChoice === rock) ||
        (playerChoice === scissors && aiChoice === paper)
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
