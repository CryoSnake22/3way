

for (let i = 3; i > 0; i--){
    let player = prompt("Please input one of the following: \n '1' for Rock \n '2' for Paper \n '3' for Scissors");
    if (player == 1) {
        player = "Rock"
    }
    else if (player == 2) {
        player = "Paper"
    }
    else if (player == 3) {
        player = "Scissors"
    }
    playRound(player, getComputerChoice())
}



function playRound(playerChoice, computerChoice){
    // Compare player choice to computer choice 
    // Determine Winner
    // Return a string telling who won
    var result = winCondition(playerChoice, computerChoice)
    console.log("Computer: " + computerChoice);
    console.log("You: " + playerChoice);
    if (result === "Win"){
        console.log("You Win! " + playerChoice + " beats " + computerChoice);
    }
    else if (result === "Lose"){
        console.log("You Lose! " + computerChoice + " beats " + playerChoice)
    }
    else{
        console.log("Its a tie!")
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