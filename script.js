const letters= "abcdefghjiklmnopqrstuvwxyz";
//letters for the game

let lettersArray = Array.from(letters);
//creates an array from letters 

console.log(lettersArray);
//testing to see that the letters created the array

let lettersClass = document.querySelector('.letters');
//select letters class 

lettersArray.forEach(letter => {
    let span = document.createElement('span');
    //create span 
    let theLetters = document.createTextNode(letter);
    //create letter text node
    span.appendChild(theLetters);
    //appends the letter to span
    span.className = 'letter-box';
    //add class to span
    lettersClass.appendChild(span);
})
//Generates the letters for Hangman!
//OMG IT WORKEDD!!!!!




