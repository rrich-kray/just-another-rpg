const Player = require('../lib/Player') // imports player constructor from Player.js. Node assumes its a .js file unless specified otherwise
const Potion = require('../lib/Potion') // imports potion constructor from Potion.js

// In general, you want to test one feature at a time

 jest.mock('../lib/Potion') // mocks/replaces the constructor's implementation with our faked data

 console.log(new Potion())

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toEqual(expect.any(String));
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    )
})

test("gets players's stats as an object", () => { // checking that player.getStats() returns an object with four specific properties
    const player = new Player()

    expect(player.getStats()).toHaveProperty('potions')
    expect(player.getStats()).toHaveProperty('health')
    expect(player.getStats()).toHaveProperty('strength')
    expect(player.getStats()).toHaveProperty('agility')
})

test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = []

    expect(player.getInventory()).toEqual(false)
})

test("gets player's health value", () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()))
})

test('checks if the player is alive or not', () => {
    const player = new Player();

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
})

test('checks if health is depleted', () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0)
})

test("get's players attack value", () => {
    const player = new Player('Dave');
    player.strength = 10

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
})

test('check if a potion was added correctly', () => {
    const player = new Player('Dave');
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount)
})


test('check that usePotion() adds health and removes a potion from inventory', () => {
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount)
})

// We create a new player every test so that we can test in isolation

// specificity gives tests more value and actionable feedback
// When you run npm run test, it will run all files within the __tests__ directory and any other .test files throughout the project.
// If you only want to run a particular group of related tests (known as a test suite), you can modify the npm run command as shown here:

// npm run test Player
// npm run test Potion
