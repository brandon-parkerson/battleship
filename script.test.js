import { Ship, Gameboard } from "./script.js";

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

it("ship is placed", () => {
  const mockShip = new Ship(3, 0, false);
  const gameboard = new Gameboard;
  const board = gameboard.placeShip(mockShip, 0, 0);
  
  expect(board).toEqual([
    ["1", "", "", "", "", "", "", "", "", ""],
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
