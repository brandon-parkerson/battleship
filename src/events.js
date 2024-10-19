import { Ship, Player } from "./script.js";

import "./styles.css";

document.addEventListener("DOMContentLoaded", (event) => {
  const player = new Player();
  const computer = new Player();

  createShips(player, computer);
  generateBoards(player, computer);

  const shuffleButton = document.querySelector(".shuffle");
  shuffleButton.addEventListener("click", shuffle);
});

function generateBoards(player, computer) {
  const playerBoard = document.querySelector(".player-board");
  const computerBoard = document.querySelector(".computer-board");

  // Player board's grid
  for (let i = 0; i < player.gameboard.board.length; i++) {
    for (let j = 0; j < player.gameboard.board[i].length; j++) {
      const box = document.createElement("div");
      box.classList.add("box");

      // Check if there's a ship at the current coordinates
      if (player.gameboard.board[i][j] instanceof Ship) {
        box.classList.add("ship");
      }

      playerBoard.appendChild(box);
    }
  }

  // Computer board's grid
  for (let i = 0; i < computer.gameboard.board.length; i++) {
    for (let j = 0; j < computer.gameboard.board[i].length; j++) {
      const box = document.createElement("div");
      box.classList.add("box");

      // Check if there's a ship at the current coordinates
      if (computer.gameboard.board[i][j] instanceof Ship) {
        box.classList.add("ship");
      }

      computerBoard.appendChild(box);
    }
  }
}

function createShips(player, computer) {
  const ship1 = new Ship(5, 0, false);
  const ship2 = new Ship(3, 0, false);
  const ship3 = new Ship(3, 0, false);
  const ship4 = new Ship(2, 0, false);
  const ship5 = new Ship(2, 0, false);
  const ship6 = new Ship(2, 0, false);
  const ship7 = new Ship(1, 0, false);
  const ship8 = new Ship(1, 0, false);
  const ship9 = new Ship(1, 0, false);
  const ship10 = new Ship(1, 0, false);

  player.gameboard.placeShip(ship1);
  player.gameboard.placeShip(ship2);
  player.gameboard.placeShip(ship3);
  player.gameboard.placeShip(ship4);
  player.gameboard.placeShip(ship5);
  player.gameboard.placeShip(ship6);
  player.gameboard.placeShip(ship7);
  player.gameboard.placeShip(ship8);
  player.gameboard.placeShip(ship9);
  player.gameboard.placeShip(ship10);

  computer.gameboard.placeShip(ship1);
  computer.gameboard.placeShip(ship2);
  computer.gameboard.placeShip(ship3);
  computer.gameboard.placeShip(ship4);
  computer.gameboard.placeShip(ship5);
  computer.gameboard.placeShip(ship6);
  computer.gameboard.placeShip(ship7);
  computer.gameboard.placeShip(ship8);
  computer.gameboard.placeShip(ship9);
  computer.gameboard.placeShip(ship10);
}

function shuffle() {
  location.reload();
}

