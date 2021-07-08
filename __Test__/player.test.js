const Player = require("../lib/player");

const Potion = require("../lib/Potions");

jest.mock("../lib/Potions");

console.log(new Potion());

test("creates a player object", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

test("get player's health value", () => {
  const player = new Player("Dave");

  expect(player.getHealth()).toEqual(
    expect.stringContaining(player.health.toString())
  );
});

test("checks if player is alive or not", () => {
  const player = new Player("Dave");

  expect(player.isAlive()).toBeTruthy();

  player.health = 0;

  expect(player.isAlive()).toBeFalsy();
});

test("substracts from player's health", () => {
  const player = new Player("Dave");
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});
