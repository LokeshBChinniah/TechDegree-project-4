/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


/**Create Game class for start and end games
 * interact
 * Get random Phrase
 * Check for Win
 *remove life for wrong guess*/
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }

    /**
     * Create phrases for use in game
     */
    createPhrase() {
        let phrases = [
            new Phrase('Interstellar'),
            new Phrase('Avengers'),
            new Phrase('Alien'),
            new Phrase('ThunderStruck'),
            new Phrase('Martian')
        ];
        return phrases;
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        let hideOverlayDiv = document.getElementById('overlay');
        hideOverlayDiv.style.display = 'none';

        const randomPhrase =  this.getRandomPhrase()
        randomPhrase.addPhraseToDisplay()
        this.activePhrase =  randomPhrase;
    }

    /**
     * Selects random phrase from phrases property
     */
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        let randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
    }

    /**Checks to see if the button clicked by the player matches a letter in the phrase
     * directs game to remove life, and check if the game is over/won
     */
    handleInteraction(button){

        button.disabled = true;
    

        if( this.activePhrase.checkLetter(button.textContent) === false ){
            button.className = 'wrong';
            this.removeLife();
        } else {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter( button.textContent );
            
        }

        if( this.checkForWin() === true ){
            this.gameOver(true);
            this.checkForWin();
        }

    }

    //Removes a life if a wrong word is selected
    removeLife(){

        this.missed += 1;
        const scoreboard = document.querySelector('#scoreboard ol');
        const life = document.querySelector('img[src="images/liveHeart.png"]');
        life.src="images/lostHeart.png";
        
        if( this.missed === 5 ){
            this.gameOver(false);
        }

    }

    //Checks if the letters match and the player has won
    checkForWin(){

        const matchedLetters = document.querySelectorAll('.show');
        const matched = matchedLetters.length;
        const givenPhrase = this.activePhrase.phrase.length;

        if( matched === givenPhrase ){
            return true;
        } else {
            return false;
        }
    
    }

    //Ends the game if the player has won or if they run out of lives
    gameOver(gameWon){

        const overlay = document.querySelector('#overlay');
        const gameOverMsg = document.querySelector('#game-over-message');
        const letters = document.querySelectorAll('ul li');
        const buttons = document.querySelectorAll('button');
        const lostLifes = document.querySelectorAll('img[src="images/lostHeart.png"]');

        if( gameWon === true ){
            overlay.className = 'win';
            gameOverMsg.textContent = "Congratulation! You Win!"
            overlay.style.display = 'block';
        } else {
            overlay.className = 'lose';
            gameOverMsg.textContent = "It's Too Bad! Try Again!"
            overlay.style.display = 'block';
        }

        
        letters.forEach( letter => {
            letter.remove();
        });

        buttons.forEach( button => {
            button.disabled = false;
            button.className = 'key';
        });
        
        lostLifes.forEach( life => {
            life.src="images/liveHeart.png";
        });

        
    
    }
}