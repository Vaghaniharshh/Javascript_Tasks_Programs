//  Javascript Program to Generate a Random Number Between Two Numbers

{
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Example usage:
    console.log(getRandomNumber(1, 20)); 
    console.log(getRandomNumber(30, 70)); 

}