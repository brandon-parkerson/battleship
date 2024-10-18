class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(""));
    this.misses = [];
    this.ships = [];
  }

  getCoords(max) {
    const x = Math.floor(Math.random() * max);
    const y = Math.floor(Math.random() * max);
    return [x, y];
  }

  randomDirection() {
    return Math.random() < 0.5 ? "horizontal" : "vertical";
  }

  placeShip(ship) {
    let [x, y] = this.getCoords(this.board.length);
    const direction = this.randomDirection();

    if (!this.validateShipPlacement(x, y, direction, ship.length)) {
      return this.placeShip(ship); // Retry if invalid placement
    }

    for (let i = 0; i < ship.length; i++) {
      this.board[x][y] = ship;
      if (direction === "horizontal") {
        x++; // Move right for horizontal placement
      } else {
        y++; // Move down for vertical placement
      }
    }

    this.ships.push(ship);
  }

  validateShipPlacement(x, y, direction, length) {
    // Check bounds for horizontal placement
    if (direction === "horizontal" && x + length > this.board.length) {
      return false;
    }
    // Check bounds for vertical placement
    if (direction === "vertical" && y + length > this.board[0].length) {
      return false;
    }
    // Check if any space is already occupied
    for (let i = 0; i < length; i++) {
      if (this.board[x][y] !== "") {
        return false;
      }
      if (direction === "horizontal") {
        x++; // Check the next horizontal space
      } else {
        y++; // Check the next vertical space
      }
    }
    return true;
  }

  receiveAttack(coords) {
    const [x, y] = coords;
    if (this.board[x][y] instanceof Ship) {
      this.board[x][y].hit();
      return "hit";
    } else {
      this.misses.push(coords);
      return "miss";
    }
  }

  checkAllShips() {
    return this.ships.every((ship) => ship.isSunk())
      ? "game over"
      : "still playing";
  }
}

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

class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }
}

export { Player, Gameboard, Ship };
