var computerScore = 0;
var playerScore = 0;
function computerPlay(){
    var choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random() * choice.length)]
}

function playRound(playerSelection,computerSelection){
     
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors"){
        playerScore++ ;
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper"){
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock"){
        playerScore++;
        return "You win! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors"){
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper"){
        playerScore++;
        return "You win! Scissor beats Paper";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock"){
        computerScore++;
        return "You lose! Rock beats Scissors";
    }

    else{
        return "It's a draw!"
    }
}

function game(){
    
    for(var i = 0 ; i<5 ; i++){
        var computerSelection = computerPlay();
        var playerSelection = prompt("Enter Rock, Paper or Scissors please:");
        if(playerSelection.toLowerCase()!= "rock" && playerSelection.toLowerCase()!= "paper" && playerSelection.toLowerCase()!= "scissors"){
            alert("You typed wrong!");
            i--;
            continue;   
        }
        else{
        let winner = playRound(playerSelection,computerSelection)
        alert(winner + " Score: Player= "+playerScore+" vs Computer= "+computerScore);
        console.log(winner + " Score: Player= "+playerScore+" vs Computer= "+computerScore);  
    }
    }
    if (playerScore>computerScore){
        alert("The winner is Player!");
    }
    else if(playerScore<computerScore){
        alert("You lose!");
    }
    else{
        alert("It's a draw!");
    }
}



game();

