// JavaScript Program to Reverse a String

{
    let str = "Hello World";

    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    console.log("Original String: " + str);
    console.log("Reversed String: " + reversedStr);

}