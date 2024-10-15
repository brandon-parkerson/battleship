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
// TODO: have placeShip pass test

class Gameboard {
  board = [
    ["", "", "", "", "", "", "", "", "", ""], [
      ("", "", "", "", "", "", "", "", "", "")
    ], [("", "", "", "", "", "", "", "", "", "")], [
      ("", "", "", "", "", "", "", "", "", "")
    ], [("", "", "", "", "", "", "", "", "", "")], [
      ("", "", "", "", "", "", "", "", "", "")
    ], [("", "", "", "", "", "", "", "", "", "")], [
      ("", "", "", "", "", "", "", "", "", "")
    ], [("", "", "", "", "", "", "", "", "", "")], [
      ("", "", "", "", "", "", "", "", "", "")
    ],
  ];
  placeShip(ship, coordinates) {
    return 1;
  }
}

export { Ship, Gameboard };
