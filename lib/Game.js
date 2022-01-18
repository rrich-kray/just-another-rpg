const inquirer = require('inquirer')
const Enemy = require('./Enemy')
const Player = require('./Player')

// The game logic will not interact directly with potions, but the PLayer and Enemy objects will
// The game logic will interact directly with the Player and Enemy objects

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy; 
    this.player; // currentEnemy and player are currently undefined
}

Game.prototype.initializeGame = function() { // Where we set up player and enemy objects
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        .then(({ name }) => {
            this.player = new Player(name);

            // test the object creation
            this.startNewBattle()
        })
}

module.exports = Game