// JavaScript Program to Check Whether a String is Palindrome or Not

{
    let str = "Harsh";

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    if (str === reversed) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }
}
