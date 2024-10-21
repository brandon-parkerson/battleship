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
      box.classList.add("computer-box");

      // Check if there's a ship at the current coordinates
      if (computer.gameboard.board[i][j] instanceof Ship) {
        box.classList.add("ship");
      }

      computerBoard.appendChild(box);
    }
  }
  playGame(player, computer);
}

function createShips(player, computer) {
  player.gameboard.placeShip(new Ship(5, 0, false));
  player.gameboard.placeShip(new Ship(3, 0, false));
  player.gameboard.placeShip(new Ship(3, 0, false));
  player.gameboard.placeShip(new Ship(2, 0, false));
  player.gameboard.placeShip(new Ship(2, 0, false));
  player.gameboard.placeShip(new Ship(2, 0, false));
  player.gameboard.placeShip(new Ship(1, 0, false));
  player.gameboard.placeShip(new Ship(1, 0, false));
  player.gameboard.placeShip(new Ship(1, 0, false));
  player.gameboard.placeShip(new Ship(1, 0, false));

  computer.gameboard.placeShip(new Ship(5, 0, false));
  computer.gameboard.placeShip(new Ship(3, 0, false));
  computer.gameboard.placeShip(new Ship(3, 0, false));
  computer.gameboard.placeShip(new Ship(2, 0, false));
  computer.gameboard.placeShip(new Ship(2, 0, false));
  computer.gameboard.placeShip(new Ship(2, 0, false));
  computer.gameboard.placeShip(new Ship(1, 0, false));
  computer.gameboard.placeShip(new Ship(1, 0, false));
  computer.gameboard.placeShip(new Ship(1, 0, false));
  computer.gameboard.placeShip(new Ship(1, 0, false));
}

function shuffle() {
  location.reload();
}

function playGame(player, computer) {
  const computerBoxes = document.getElementsByClassName("computer-box");

  for (let i = 0; i < computerBoxes.length; i++) {
    const x = Math.floor(i / 10);
    const y = i % 10;

    const computerBox = computerBoxes[i];

    // Add listener only if it's not already clicked
    if (!computerBox.classList.contains("click-added")) {
      computerBox.addEventListener("click", () => {
        if (!computerBox.classList.contains("clicked")) {
          checkHit(computerBox, x, y, computer.gameboard, player);
          computerBox.classList.add("clicked");
        }
      });
      computerBox.classList.add("click-added"); // Mark as listener added
    }
  }
}

function checkHit(box, x, y, gameboard, player) {
  const result = gameboard.receiveAttack([x, y]);

  if (result === "hit") {
    box.classList.add("hit");

    checkSunk(gameboard, x, y, false);
  } else {
    box.classList.add("miss");
    console.log("miss");
  }
  computerTurn(player);
}

function checkSunk(gameboard, x, y, isPlayer) {
  const ship = gameboard.board[x][y];
  if (ship instanceof Ship && ship.isSunk() === true) {
    console.log("ship is sunk");
    markSunkShip(ship, gameboard, isPlayer);

    const gameOver = gameboard.checkAllShips();
    if (gameOver === true) {
      alert("game over");
    }
  }
}

function computerTurn(player) {
  // Get a random coordinate
  let [x, y] = player.gameboard.getCoords(10);

  // Check if this coordinate has already been attacked
  while (
    player.gameboard.misses.some(
      (coords) => coords[0] === x && coords[1] === y
    ) ||
    (player.gameboard.board[x][y] instanceof Ship &&
      player.gameboard.board[x][y].timesHit > 0)
  ) {
    // Keep picking random coordinates until an unhit one is found
    [x, y] = player.gameboard.getCoords(10);
  }

  // Perform the attack
  const result = player.gameboard.receiveAttack([x, y]);

  // Get the player's board DOM element
  const playerBoard = document.querySelector(".player-board");
  const box = playerBoard.children[x * 10 + y]; // Find the corresponding box

  if (result === "hit") {
    box.classList.add("hit");
    console.log(`Computer hit at (${x}, ${y})`);
    checkSunk(player.gameboard, x, y, true);
  } else {
    box.classList.add("miss");
    console.log(`Computer missed at (${x}, ${y})`);
  }

  // Check if all ships are sunk
  player.gameboard.checkAllShips();
}

function markSunkShip(ship, gameboard, isPlayer) {
  const boardSelector = isPlayer ? ".player-board" : ".computer-board";
  ship.coordinates.forEach(([x, y]) => {
    const box = document.querySelector(
      `.computer-board .box:nth-child(${x * 10 + y + 1})`
    );
    box.classList.add("sunk");
  });
}

playGame();
