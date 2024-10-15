class Ship {
  constructor(length, timesHit, sunk) {
    this.length = length;
    this.timesHit = timesHit;
    this.sunk = sunk;
  }
  hit() {
    this.timesHit = timesHit + 1;
    return this.timesHit;
  }
  isSunk() {
    if (this.timesHit === this.length) {
      return true;
    } else {
      return false;
    }
  }
}
