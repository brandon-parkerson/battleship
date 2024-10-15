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
  placeShip(ship, x, y) {
    let board = this.board;
    const length = ship.length;

    for (let i = 0; i < length; i++) {
      board[x][y] = 1;
      x++;
    }

    //board[x][y] = 1;

    return board;
  }
}

export { Ship, Gameboard };
