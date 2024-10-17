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

// it("ship is placed", () => {
  
//   const mockShip = new Ship(3, 0, false)
//   const gameboard = new Gameboard;
//   const board = gameboard.board;
//   gameboard.placeShip(mockShip);

//   expect(board).toContain(1);
// })

it("random starting coordinates", () => {
    const gameboard = new Gameboard();
    const coords = gameboard.getCoords(10)
    expect(coords[0]).toBeGreaterThanOrEqual(0);
    expect(coords[0]).toBeLessThanOrEqual(10);
    expect(coords[1]).toBeGreaterThanOrEqual(0);
    expect(coords[1]).toBeLessThanOrEqual(10);
  });

  it("received attack", () => {
    const gameboard = new Gameboard();
    const coords = gameboard.getCoords(10);
    const attack = gameboard.receiveAttack(coords);
    expect(attack).toBe('miss');
  })
