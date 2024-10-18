import { Ship, Gameboard, Player } from "./script.js";
import "./styles.css";

document.addEventListener("DOMContentLoaded", (event) => {
  generateBoards();
});

function generateBoards() {
  const playerBoard = document.querySelector(".player-board");
  const computerBoard = document.querySelector(".computer-board");
  const player = new Player();
  const computer = new Player();
  
  // player board's grid
  for (let i = 0; i < player.gameboard.board.length; i++) {
    for (let j = 0; j < player.gameboard.board[i].length; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
    
        playerBoard.appendChild(box);
    }
  }
  // computer board's grid
  for (let i = 0; i < computer.gameboard.board.length; i++) {
    for (let j = 0; j < player.gameboard.board[i].length; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
    
        computerBoard.appendChild(box);
    }
  }
  

  
}
