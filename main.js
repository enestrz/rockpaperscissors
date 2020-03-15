//Construct DOM with JS
const body = document.querySelector('body');


//Welcome Screen Elements
const welcomeButton = document.querySelector('#welcomeButton');

//Game Screen Elements
const buttons = document.querySelectorAll('.buttons');
const div = document.createElement('div');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
div.appendChild(p1);
div.appendChild(p2);
div.setAttribute('id','contes');
p2.setAttribute('id','score');
body.appendChild(div);

//End Game Screen Elements
const againButton = document.querySelector('#againButton');
againButton.style.display = "none";
div.appendChild(againButton);

//Functions
var computerScore = 0;
var playerScore = 0;
var round;


function computerPlay(){
    var choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random() * choice.length)]
}
 
function playRound(playerSelection){
    let computerSelection = computerPlay();
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
    
    //div.innerHTML = "Player: "+playerScore+" vs Computer: "+computerScore +"<br />" + round;
    p1.innerHTML = "Player "+playerScore+" - "+ computerScore+" Computer";
    p2.innerHTML = round;
    if (playerScore==5 ||computerScore ==5 ){
       // div.innerHTML = "Player: "+playerScore+" vs Computer: "+computerScore +"<br />" + round; 
       
        setTimeout(function() {
            if(playerScore ==5){
                p1.innerHTML= "You win!";
                
            }
            else{
                p1.innerHTML= "You lose!!";
                
            }
            p2.innerHTML = "Player "+playerScore+" - "+ computerScore+" Computer";
            document.querySelectorAll('.buttons')[0].style.display = "none";
            document.querySelectorAll('.buttons')[1].style.display = "none";
            document.querySelectorAll('.buttons')[2].style.display = "none";
            againButton.style.display = "inline-block";
        },10)
       
        
    }
   
} 
welcomeButton.addEventListener('click', (e) => {
    buttons.forEach((button) => {
        welcomeButton.style.display = "none";
        button.style.display = "inline-block";

    }
    );

});


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
       round = playRound(button.value);
       game();
      });
});

againButton.addEventListener('click',(e) => {
    computerScore = 0;
    playerScore = 0;
    againButton.style.display = "none";
    p1.innerHTML = "Player "+playerScore+" - "+ computerScore+" Computer";
    p2.innerHTML = "";
    document.querySelectorAll('.buttons')[0].style.display = "inline-block";
    document.querySelectorAll('.buttons')[1].style.display = "inline-block";
    document.querySelectorAll('.buttons')[2].style.display = "inline-block";

});
