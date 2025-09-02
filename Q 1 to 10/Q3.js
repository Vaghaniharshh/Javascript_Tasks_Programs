// 3) JavaScript Program to Find the Square Root 

{
    let number = 16;
    let result = 0;

    for (let i = 1; i <= number; i++) {
        if (i * i === number) {
            result = i;
            break;
        }
    }

    if (result === 0) {
        console.log("Square root is not a whole number");
    } else {
        console.log("Square root of " + number + " is " + result);
    }

}