class Ship {
  constructor(length, timesHit, sunk) {
    this.length = length;
    this.timesHit = timesHit;
    this.sunk = sunk;
  }
  hit() {
    this.timesHit = this.timesHit + 1;
    return this.timesHit;
  }
  isSunk() {
    if (this.timesHit === this.length) {
      return (this.sunk = true);
    } else {
      return (this.sunk = false);
    }
  }
}

class Gameboard {
  constructor() {
    this.board = [
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ];
  }

  getCoords(max) {
    const x = Math.floor(Math.random() * max);
    const y = Math.floor(Math.random() * max);

    return [x, y];
  }

  randomDirection() {
    if (Math.round(Math.random()) === 0) {
      return "horizontal";
    } else {
      return "vertical";
    }
  }

  placeShip(ship) {
    const boardLength = this.board.length;
    let coords = this.getCoords(boardLength);
    const direction = this.randomDirection();
    let x = coords[0];
    let y = coords[1];

    let board = this.board;
    const length = ship.length;

    if (x > board.length || y > board.length) {
      // Get new coordinates if it is off the board
      coords = this.getCoords(boardLength);
    }
    if (direction === "horizontal") {
      for (let i = 0; i < length; i++) {
        if (board[x][y] === 1) {
          return "there is a ship there";
        } else {
          board[x][y] = 1;
          x++;
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (board[x][y] === 1) {
          return "there is a ship there";
        } else {
          board[x][y] = 1;
          y++;
        }
      }
    }

    return board;
  }

  receiveAttack(coords) {
    const misses = [];
    const x = coords[0];
    const y = coords[1];
    const board = this.board;
    if (board[x][y] === 1) {
      return "hit";
    } else {
      misses.push(coords);
      return "miss";
    }

  } 
}


export { Ship, Gameboard };
