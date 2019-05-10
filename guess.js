/*
0. Declare price to be 87
1. Get input from user then store it in a variable called guess
2. If guess is bigger than 87
        tell user "too high"
    else if guess is smaller than 87
        tell user "too low"
    else 
        "winner"
*/
var guessBtn = document.querySelector("#guess");
var resetBtn = document.querySelector("#reset");
var price;

guessBtn.addEventListener("click", decideIfWon);
resetBtn.addEventListener("click", resetGame);

function randomize() {
  price = Math.floor(Math.random() * 100) + 1;
  console.log(price);
}

function resetGame() {
  var guessField = document.querySelector("#guessField");
  var lowOrHigh = document.querySelector("#lowOrHigh");

  randomize();
  guessField.value = "";
  lowOrHigh.textContent = "";
}

function decideIfWon() {
  var guessField = document.querySelector("#guessField");
  var lowOrHigh = document.querySelector("#lowOrHigh");

  if (guessField.value > price) {
    //console.log("too high");
    lowOrHigh.textContent = "Too High";
  } else if (guessField.value < price) {
    //console.log("too low");
    lowOrHigh.textContent = "Too Low";
  } else {
    //console.log("winner");
    lowOrHigh.textContent = "Winner!";
    document.body.style.backgroundColor = "steelBlue";
  }
}

randomize();
