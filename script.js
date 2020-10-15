const letters= "abcdefghjiklmnopqrstuvwxyz";
//letters for the game

let lettersArray = Array.from(letters);
//creates an array from letters 

//console.log(lettersArray);
//testing to see that the letters created the array

let lettersClass = document.querySelector(".letters");
//select letters class 

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    //create span 
    let theLetters = document.createTextNode(letter);
    //create letter text node
    span.appendChild(theLetters);
    //appends the letter to span
    span.className = "letter-box";
    //add class to span
    lettersClass.appendChild(span);
});
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

let randomnPropNumber = Math.floor(Math.random() * allKeys.length);
// get randomn category hopefully from words which is allkeys now 
let randomPropName = allKeys[randomnPropNumber];
//categories
let randomPropValue = words[randomPropName];
//categories words
let randomValueNumber= Math.floor(Math.random() * randomPropValue.length);
// this line of code choose the indice from one of the category arrays for the game
let randomValue2= randomPropValue[randomValueNumber];
//the chosen word for the game

//console.log(randomnPropNumber)
//console.log(allKeys[0])
//console.log(allKeys[2])
//test to see that a category is pulled up
//console.log(randomPropName);
//console.log(words["countries"])
//console.log(randomPropValue)
//console.log(randomValueNumber)

//console.log(randomPropValue[2]) shows the indice from a random category 
//console.log(randomPropValue[randomValueNumber]) - the answer that is the chosen word
// does the same thing as the console log prior without entering an indice myself and make it randomized

document.querySelector(".game-info .category span").innerHTML = randomPropName;
//generates word from: "categories" for the game

let lettersGuessClass = document.querySelector(".letters-guess");
//  create chosen word to a guess element 
let lettersAndSpace = Array.from(randomValue2);
//convert chosen word to an array
lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");
    //create an empty span
    if (letter === " " ) {
        emptySpan.className = "with-space";
        //add class to the span
    }
    lettersGuessClass.appendChild(emptySpan);
    //appends span to the letter guess class
});
let guessSpans = document.querySelectorAll(".letters-guess span");
//select a guess span

let wrongAttempts = 0;

let theHangmanDraw = document.querySelector(".hangman-draw");


document.addEventListener("click", (e) => {
    let theStatus = false;

    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");

        //clicks on the letter

    let clickedLetter = e.target.innerHTML.toLowerCase();
    let theChosenWord = Array.from(randomValue2.toLowerCase());
    theChosenWord.forEach((wordLetter, WordIndex) => {
         if (clickedLetter == wordLetter){
            theStatus = true;
            //setting the choose status from false to true now for the loop

         guessSpans.forEach((span, spanIndex) => {
            if(WordIndex === spanIndex) {
               span.innerHTML = clickedLetter;
                }
            });

            }
        });
 
//outside loop
//if letter is wrong
    if (theStatus !== true) {

    wrongAttempts++;
    theHangmanDraw.classList.add(`wrong-${wrongAttempts}`);
    }
 }  
});
// draws the hangman with every wrong click of the wrong letter

