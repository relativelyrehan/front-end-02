const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const scoreBoard = document.querySelector(".score");
const user = document.querySelectorAll(".user h1");
const computer = document.querySelectorAll(".computer h1");
const verdict = document.querySelector(".verdict");

const wrapper = document.querySelectorAll(".wrapper");

const availableSelections = [
  "wrapper rock",
  "wrapper paper",
  "wrapper scissor",
];

let useSelection;
let computerSelection;
let score = 0;

scoreBoard.innerHTML = score;

wrapper.forEach((item) => {
  item.addEventListener("click", function () {
    if (useSelection) {
      user[useSelection - 1].style.color = "#FFF";
    }

    if (computerSelection) {
      computer[computerSelection - 1].style.color = "#FFF";
    }
    computerSelection = Math.floor(Math.random() * 3 + 1);
    useSelection = availableSelections.indexOf(this.className) + 1;

    user[useSelection - 1].style.color = "green";
    computer[computerSelection - 1].style.color = "red";

    if (
      (useSelection === 1 && computerSelection === 3) ||
      (useSelection === 2 && computerSelection === 1) ||
      (useSelection === 3 && computerSelection === 2)
    ) {
      score++;
      verdict.innerHTML = "WINS";
      scoreBoard.innerHTML = score;
    } else if (
      (useSelection === 1 && computerSelection === 2) ||
      (useSelection === 2 && computerSelection === 3) ||
      (useSelection === 3 && computerSelection === 1)
    ) {
      score = 0;
      verdict.innerHTML = "LOSE";
      scoreBoard.innerHTML = score;
    } else {
      verdict.innerHTML = "DRAW";
    }
  });
});
