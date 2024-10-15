import { Ship } from "./script.js";

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
