const letters= "abcdefghjiklmnopqrstuvwxyz";
//letters for the game

let lettersArray = Array.from(letters);
//creates an array from letters 

//console.log(lettersArray);
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

const words = {
    animals: ["cat", "camel", "toucan","elephant","dog","giraffe","snake","lion","panda"],
    movies: ["Pulp Fiction","Lord of the Rings","The Hobbit","The Gentlemen","Interstellar","A Beautiful Mind", "Imagination Game", "Monty Python"],
    countries: ["Israel","Norway","Egypt","Honduras","Palestine","Paraguay","Brazil","Jordan","Netherlands","Germany","Greece","Bosnia","Ukraine"],
    people: ["Angelina Jolie", "Albert Einstein", "Jack the Ripper","Kylie Jenner"]
}
// populate the categories keys
let allKeys = Object.keys(words);
//console.log(allKeys)
// 

let randomnPropNumber = Math.floor(Math.random()* allKeys.length);
//console.log(randomnPropNumber)
// get randomn category hopefully from words which is allkeys now






