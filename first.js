let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
//choices andar sab choice jo hein
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3); // math 3 ho na toh ek kam karke de na
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "game was Draw. Play again.";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
    //generate computer choice;
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //comp choice  karega = scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //comp choice karega = rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //comp choice karega = rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => { //choices mein ek ek choice
    choice.addEventListener("click",() => { // choice event-karega click ho jayega
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});