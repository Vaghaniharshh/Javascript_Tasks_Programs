// JavaScript Program to Generate a Range of Numbers and Characters


// For numbers 
{
    function numberRange(start, end) {
        let result = [];
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
        return result;
    }

    console.log(numberRange(1, 10));
}

// for character 
{
    function charRange(startChar, endChar) {
        let result = [];
        for (let i = startChar.charCodeAt(0); i <= endChar.charCodeAt(0); i++) {
            result.push(String.fromCharCode(i));
        }
        return result;
    }

    console.log(charRange('C', 'H'));
    console.log(charRange('f', 'p'));

}