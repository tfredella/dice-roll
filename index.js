const headMsg = document.querySelector("h1");

const roll = document.querySelector("button");

const playerOne = document.querySelector(".img1");

const playerTwo = document.querySelector(".img2");

roll.addEventListener("click", async () => {
const pOneRoll = Math.floor(Math.random()*6) + 1;
const pTwoRoll = Math.floor(Math.random()*6) + 1;
playerOne.setAttribute("src", `./images/dice${pOneRoll}.png`);
playerTwo.setAttribute("src", `./images/dice${pTwoRoll}.png`);

if (pOneRoll > pTwoRoll) {
     headMsg.textContent = "🚩 Player 1 Wins!"
} else if (pOneRoll < pTwoRoll) {
     headMsg.textContent = "Player 2 Wins! 🚩"
} else if (pOneRoll == pTwoRoll) {
     headMsg.textContent = "Draw. Roll Again!"
}
})