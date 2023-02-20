let plSelected;
let playerScore = 0;
let botScore = 0;
     
    const buttons = document.querySelectorAll('button');
    const result = document.querySelector('#result_container');
    const pResult = document.createElement('p');
            pResult.setAttribute('id', 'rPara');
    const roundCounter = document.createElement('p');
            roundCounter.setAttribute('id', 'roCounter');
    const roComplete = document.createElement('p');
            roComplete.setAttribute('id', 'ro_end');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            plSelected = button.id.toUpperCase();
            pResult.textContent = playround(plSelected, getComputerChoice());
            roundCounter.textContent = playerScore.toString() + " " + botScore.toString();
            roComplete.textContent = '';
            result.appendChild(pResult);
            result.appendChild(roundCounter);
            result.appendChild(roComplete);
            if (playerScore == 5 || botScore == 5) {
                roComplete.textContent = gameRecorder(playerScore, botScore);
                gameRounds = 0;
                playerScore = 0;
                botScore = 0;
                result.removeChild(pResult);
                result.removeChild(roundCounter);
                result.appendChild(roComplete);
            };
        });
    });

    // Generate bot's choice
    function getComputerChoice() {

        //Generates random number from 1 to 3
        let choice = Math.floor(Math.random()*3) + 1;

        //Converts generated number to Rock,Paper & Scissor values
        switch(choice) {
            case 1:
                return choice = "ROCK";
                break;
            case 2:            
                return choice = "PAPER";
                break;
            default:              
                return choice = "SCISSORS";
        }
    }
        

        function playround(player,bot) {
            if (player === bot) {
                return "Player Selected: " + player + "\nBot Selected: " + bot + " : ROUND DRAW!!"; 
            } else if ((player === "PAPER" && bot === "ROCK") || (player === "ROCK" && bot === "SCISSORS") || (player === "SCISSORS" && bot === "PAPER")) {
                playerScore++;
                return "Player Selected: " + player + "\nBot Selected: " + bot + " : PLAYER WON!!"; 
            } else {
                botScore++;
                return "Player Selected: " + player + "\nBot Selected: " + bot + " : BOT WON!!"; 
            }
        }

  
    function gameRecorder(pScore, bScore) {
            if (pScore > bScore) {
            return "-------\n**GAME ENDED**\nPlayer Wins!!\n-------";
            } else if (pScore == bScore) {
            return "-------\n**GAME ENDED**\nDraw!!\n-------";
            } else {
            return "-------\n**GAME ENDED**\nBot Wins!!\n-------";
            }
    }/*  */
        
