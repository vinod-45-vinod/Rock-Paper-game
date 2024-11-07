let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
 if(userWin) {
     userScore++;
     userScorePara.innerText = userScore;
     console.log("you win!");
     msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
     msg.style.backgroundColor = "green";

 } else {
     compScore++;
     compScorePara.innerText = compScore;
     console.log("you lose");
     msg.innerText = `You lose ${compChoice} beats ${userChoice}`;
     msg.style.backgroundColor = "red";
 }
}

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  // generate computer choice
  const compChoice = genComputerChoice();
  console.log("comp choice = ", compChoice);

  if(userChoice === compChoice) {
    // draw game
    drawGame();
   } else {
    let userWin = true;
    if(userChoice ==="rock") {
      // scirrors, paper
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice ==="paper") {
      // rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    };
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})