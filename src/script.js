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

    ship.coordinates = [];

    if (!this.validateShipPlacement(x, y, direction, ship.length)) {
      return this.placeShip(ship);
    }

    for (let i = 0; i < ship.length; i++) {
      this.board[x][y] = ship;
      ship.coordinates.push([x, y]);
      if (direction === "horizontal") {
        x++;
      } else {
        y++;
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

    for (let i = 0; i < length; i++) {
      if (this.board[x][y] !== "") {
        return false;
      }
      if (direction === "horizontal") {
        x++;
      } else {
        y++;
      }
    }
    return true;
  }

  receiveAttack(coords) {
    const [x, y] = coords;
    if (this.board[x][y] instanceof Ship) {
      this.board[x][y].hit();
      this.checkAllShips();
      return "hit";
    } else {
      this.misses.push(coords);
      return "miss";
    }
  }

  checkAllShips() {
    if (this.ships.every((ship) => ship.isSunk())) {
      return true;
    } else {
      return false;
    }
  }
}

class Ship {
  constructor(length, timesHit, sunk) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = sunk;
  }
  hit() {
    this.timesHit = this.timesHit + 1;
    console.log("hit");
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
