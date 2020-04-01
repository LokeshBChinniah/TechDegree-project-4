/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();

 document.getElementById(btn_reset).addEventListener('click', function() {
     game.startGame();
 })

 document.getElementsByClassName('key').addEventListener('click', function() {
     game.handleInteraction();


 })