/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const resetButton = document.querySelector('#btn__reset');
const keyboard = document.querySelectorAll('.key');

//Creates event listener for "start game" button upon loading the page
resetButton.addEventListener('click', () =>{

    game = new Game();

    game.startGame();

})

//Adds event listener to every keyboard button on screen
keyboard.forEach( key => {

    key.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    });

})