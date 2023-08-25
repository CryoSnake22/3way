
const myRock = document.querySelectorAll('.text');

myRock.forEach(clicked => {
    clicked.addEventListener('click', function(e){
        playRound(e.target.id, getComputerChoice());
    })
})


const resultText = document.createElement('div')
const player = document.querySelector('#Player')
const computer = document.querySelector('#Computer')
let plcount = 0;
let playerScore = 0;
let computerScore = 0;
function playRound(playerChoice, computerChoice){
    // Compare player choice to computer choice 
    // Determine Winner
    // Return a string telling who won

    plcount = plcount + 1;
    console.log(plcount)
    const container = document.querySelector('.container')
    resultText.style.marginTop = '10px';




    var result = winCondition(playerChoice, computerChoice)
    console.log("Computer: " + computerChoice);
    console.log("You: " + playerChoice);
    if (result === "Win"){
        resultText.textContent = "You Win! " + playerChoice + " beats " + computerChoice;
        playerScore = playerScore + 1;
        player.textContent = "Player: " + playerScore;
    }
    else if (result === "Lose"){
        resultText.textContent = "You Lose! " + computerChoice + " beats " + playerChoice;
        computerScore = computerScore + 1;
        computer.textContent = "Computer: " + computerScore;
    }
    else{
        resultText.textContent = "It's a tie!";
    }
    container.appendChild(resultText);
    if (playerScore >= 5){
        resultText.textContent = "Player Wins!"
        computerScore = 0

    }
    else if (computerScore >= 5){
        resultText.textContent = "Computer Wins"
        playerScore = 0
        
    }

}






function winCondition(playerChoice, computerChoice){
        if (computerChoice === playerChoice){
            return "Tie"
        }
        if (computerChoice === "Paper"){
            if (playerChoice === "Scissors"){
                return "Win"
            }
            else{
                return "Lose"
            }
        }
        if (computerChoice === "Rock"){
            if (playerChoice === "Papers"){
                return "Win"
            }
            else{
                return "Lose"
            }
        }
        if (computerChoice === "Scissors"){
            if (playerChoice === "Rock"){
                return "Win"
            }
            else{
                return "Lose"
            }
        }

    }
    

function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            choice = "Paper";
            break;
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Scissors";
            break
    }
    return choice;
}