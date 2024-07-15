const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const mainleftpic = document.getElementById("mainleftpic");
const rightmainpic = document.getElementById("rightmainpic");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const spanans = document.getElementById("spanans");

let total = 0;
let comptotal = 0;
let gameEnded = false; // Flag to track if the game has ended

// Function to handle game logic for player's choice
function playGame(playerChoice, playerImgSrc) {
    if (gameEnded) return; // Exit early if game has ended
    
    mainleftpic.src = playerImgSrc;
    const computerChoice = comp();

    if (total >= 5) {
        spanans.innerHTML = "You won the game";
        gameEnded = true; // Set game ended flag
    } else if (comptotal >= 5) {
        spanans.innerHTML = "Computer won this game";
        gameEnded = true; // Set game ended flag
    }

    // Disable buttons if game has ended
    if (gameEnded) {
        paper.disabled = true;
        rock.disabled = true;
        scissor.disabled = true;
        return;
    }
    
    if (playerChoice === computerChoice) {
        // setTimeout(() => {
        //     alert("Tied")
        // }, 500);
    } else if (
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        total++;
        num1.innerHTML = total;

    } else {
        comptotal++;
        num2.innerHTML = comptotal;
        console.log(`Computer wins. Computer Score:`, comptotal);
    }
}

// Event listeners for player choices
paper.onclick = function () {
    playGame("paper", "./assets/paper-hand.png");
};

rock.onclick = function () {
    playGame("rock", "./assets/rock-hand.png");
};

scissor.onclick = function () {
    playGame("scissors", "./assets/scissors-hand.png");
};

// Function to randomly select computer's choice
const arr = ["paper", "rock", "scissors"];





function comp() {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const computerChoice = arr[randomIndex];
    // give id there and access and user src method 
    rightmainpic.src = `./assets/${computerChoice}-hand.png`;
    return computerChoice;
}

const play = document.getElementById("play");
play.onclick = function () {
    window.location.href = "game.html";
}
