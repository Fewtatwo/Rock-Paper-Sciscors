let plSelected;
let playerScore = 0;
let botScore = 0;
let gameRounds = 0;
let roundWinner;
     

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#counter_container');
const headline = document.querySelector('.header');
const roundCounter = document.querySelector('#game_status');
const roComplete = document.querySelector('#headline');
const pSelDisp = document.querySelector('#player');
const bSelDisp = document.querySelector('#bot');
const faceOffDivP = document.querySelector('#face_off_disp_player');
const faceOffDivB = document.querySelector('#face_off_disp_bot');
const pScoreDisp = document.querySelector('#player_score');
const bScoreDisp = document.querySelector('#bot_score');



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        plSelected = button.id.toUpperCase();
        faceOff(plSelected);
        playround(plSelected, getComputerChoice());
        gameRounds++;
        roComplete.textContent = 'ROCK! PAPER! SCISSORS!';
        roundCounter.textContent = 'Round: ' + gameRounds + ' - ' + roundWinner;
        result.prepend(roundCounter);
        headline.appendChild(roComplete);
        gameSet();
    });
});

// Generate bot's choice
function getComputerChoice() {

    //Generates random number from 1 to 3
    let choice = Math.floor(Math.random()*3) + 1;

    //Converts generated number to Rock,Paper & Scissor values
    switch(choice) {
        case 1:
            bSelDisp.src = 'assets/rock.png';
            faceOffDivB.prepend(bSelDisp);
            return choice = "ROCK";
            break;
        case 2:            
            bSelDisp.src = 'assets/paper.png';
            faceOffDivB.prepend(bSelDisp);
            return choice = "PAPER";
            break;
        default:
            bSelDisp.src = 'assets/scissors.png';
            faceOffDivB.prepend(bSelDisp);              
            return choice = "SCISSORS";
    };
}
    

function playround(player,bot) {
    if (player === bot) {
        roundWinner = "ROUND DRAW!!"; 
    } else if ((player === "PAPER" && bot === "ROCK") || (player === "ROCK" && bot === "SCISSORS") || (player === "SCISSORS" && bot === "PAPER")) {
        playerScore++;
        pScoreDisp.textContent = playerScore;
        roundWinner = "PLAYER WON!!"; 
    } else {
        botScore++;
        bScoreDisp.textContent = botScore;
        roundWinner = "BOT WON!!"; 
    };
}


function gameRecorder(pScore, bScore) {
        if (pScore > bScore) {
        return "Player Wins!!";
        } else {
        return "Bot Wins!!";
        };
}

function gameSet() {
    if (playerScore == 5 || botScore == 5) {

        // Display Game Stats & Winner Declaration
        roundCounter.textContent = "Final Score: " + playerScore.toString() + " - " + botScore.toString() + ' : Total Rounds: ' + gameRounds;
        result.prepend(roundCounter);
        roComplete.textContent = gameRecorder(playerScore, botScore);

        // Reset Game Scores & Icons
        gameRounds = 0;
        playerScore = 0;
        botScore = 0;
        bSelDisp.src = 'assets/robot.png';
        faceOffDivB.prepend(bSelDisp);
        pSelDisp.src = 'assets/player.png';
        faceOffDivP.prepend(pSelDisp);  
        pScoreDisp.textContent = "--";
        bScoreDisp.textContent = "--";
        headline.appendChild(roComplete);
    };
}


// Display Player Selection
function faceOff(bet) {
    if (bet == 'ROCK') {
        pSelDisp.src = 'assets/rock.png';
        faceOffDivP.prepend(pSelDisp);
    } else if ( bet == 'PAPER') {
        pSelDisp.src = 'assets/paper.png';
        faceOffDivP.prepend(pSelDisp);
    } else {
        pSelDisp.src = 'assets/scissors.png';
        faceOffDivP.prepend(pSelDisp);
    };
}
        
