// JavaScript Program to Guess a Random Number

{
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    let userGuess = prompt("Guess a number between 1 and 10:");
    userGuess = Number(userGuess);

    if (userGuess === randomNumber) {
        alert(" Correct! The number was " + randomNumber);
    } else {
        alert(" Wrong! The number was " + randomNumber);
    }

}