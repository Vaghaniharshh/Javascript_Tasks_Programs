// JavaScript Program to Remove All Whitespaces From a Text

{
    function removeSpaces(text) {
        return text.replace(/\s+/g, ''); 
    }

    console.log(removeSpaces("Hello Harsh! How you doing?")); 
    console.log(removeSpaces("   JavaScript is  not a fun  ")); 
}