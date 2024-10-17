import { Ship, Gameboard, Player } from "../src/script.js";

it("ship is hit", () => {
  const mockShip = new Ship(2, 0, false);
  mockShip.hit();
  expect(mockShip).toEqual({ length: 2, timesHit: 1, sunk: false });
});

it("ship is sunk", () => {
  const mockShip = new Ship(2, 2, false);
  mockShip.isSunk();
  expect(mockShip).toEqual({ length: 2, timesHit: 2, sunk: true });
});

it("random starting coordinates", () => {
  const gameboard = new Gameboard();
  const coords = gameboard.getCoords(10);
  expect(coords[0]).toBeGreaterThanOrEqual(0);
  expect(coords[0]).toBeLessThanOrEqual(10);
  expect(coords[1]).toBeGreaterThanOrEqual(0);
  expect(coords[1]).toBeLessThanOrEqual(10);
});

it("received attack", () => {
  const gameboard = new Gameboard();
  const coords = gameboard.getCoords(10);
  const attack = gameboard.receiveAttack(coords);
  expect(attack).toBe("miss");
});

it("player is created", () => {
  const player1 = new Player();
  const object = {};
  expect(player1).toMatchObject(object);
});

it("board is created", () => {
  const player1 = new Player();
  expect(player1.gameboard.board).toEqual([
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
  ]);
});
