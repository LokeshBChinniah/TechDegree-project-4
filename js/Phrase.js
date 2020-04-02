/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


/**Creates a phrase class
 * and handles all the phrases
 */
class Phrase {
    constructor(phrase) {
        //convert phrases to lower case
        this.phrase = phrase.toLowerCase();
    }

    //Displays phrases on game board
    addPhraseToDisplay(){

        const phraseDiv = document.querySelector('#phrase ul');
        const split = this.phrase.split("");

        split.forEach( character => {

           const li = document.createElement('li');
           phraseDiv.appendChild(li);
           li.textContent = character;

            if( character === " "){
               li.className = 'hide space';
            } else {
               li.className = `hide letter ${character}`;
            }

        });
    }

    //Checks if passed letter is in phrase
    checkLetter(letter){

       if(this.phrase.includes(letter)){
           return true;
       } else { 
           return false;
       }
       
    }

    //Displays passed letter on screen after a match is found
    showMatchedLetter(letter){

       const phraseLetters = document.querySelectorAll('.letter');

       phraseLetters.forEach( phraseLetter => {
           if(phraseLetter.textContent === letter){
               phraseLetter.className = 'show';
           }
           
       })

    }
}