let plSelected;
let playerScore = 0;
let botScore = 0;
     

    const buttons = document.querySelectorAll('button');
    const result = document.querySelector('#result_container');
    const headline = document.querySelector('.header');
    const pResult = document.createElement('p');
            pResult.setAttribute('id', 'rPara');
    const roundCounter = document.createElement('p');
            roundCounter.setAttribute('id', 'roCounter');
    const roComplete = document.querySelector('#headline');

    // UI Improvements
    const image = document.createElement('img');

    
           

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            plSelected = button.id.toUpperCase();
            faceOff(plSelected);
            pResult.textContent = playround(plSelected, getComputerChoice());
            roundCounter.textContent = playerScore.toString() + " " + botScore.toString();
            roComplete.textContent = 'ROCK! PAPER! SCISSORS!';
            result.appendChild(pResult);
            result.appendChild(roundCounter);
            headline.appendChild(roComplete);
            if (playerScore == 5 || botScore == 5) {
                roComplete.textContent = gameRecorder(playerScore, botScore);
                gameRounds = 0;
                playerScore = 0;
                botScore = 0;
                result.removeChild(pResult);
                result.removeChild(roundCounter);
                headline.appendChild(roComplete);
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
            return "Player Wins!!";
            } else if (pScore == bScore) {
            return "Round Draw!!";
            } else {
            return "Bot Wins!!";
            }
    }

    function faceOff(bet) {
        if (bet == 'ROCK') {
            image.src = 'assets/rock.png';
            image.setAttribute('style', 'max-width: 64px; max-height: 64px; border: 1px solid pink; border-radius: 50%; background-color: rgba(238, 14, 171, .25);')
            result.appendChild(image);
        } else if ( bet == 'PAPER') {
            image.src = 'assets/paper.png';
            image.setAttribute('style', 'max-width: 64px; max-height: 64px; border: 1px solid pink; border-radius: 50%; background-color: rgba(238, 14, 171, .25);')
            result.appendChild(image);
        } else {
            image.src = 'assets/scissors.png';
            image.setAttribute('style', 'max-width: 64px; max-height: 64px; border: 1px solid pink; border-radius: 50%; background-color: rgba(238, 14, 171, .25);')
            result.appendChild(image);
        };
    }
        
