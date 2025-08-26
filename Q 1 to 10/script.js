// 1) JavaScript Program To Print Hello World 

{
    console.log("Hello World")

}

// 2) JavaScript Program to Add Two Numbers 

{
    let a = 10
    let b = 20
    let c = a + b

    console.log("Addition of the two number is :", c);

}

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

// 4) JavaScript Program to Calculate the Area of a Triangle 

{
    let b = parseInt(prompt("Enter the base : "))
    let h = parseInt(prompt("Enter the height :"))

    let area = 0.5 * b * h

    console.log("Area of triangle is : ", area)
    
}
