// JavaScript Program to Check if a Number is Float or Integer

{
    function checkNumber(num) {
        if (Number.isInteger(num)) {
            return `${num} is an Integer`;
        } else {
            return `${num} is a Float`;
        }
    }

    console.log(checkNumber(10));    
    console.log(checkNumber(3.14));  
}