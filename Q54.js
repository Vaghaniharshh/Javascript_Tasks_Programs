//  JavaScript Program To Check If A Variable Is undefined or null

{
    function checkVariable(variable) {
        if (variable === undefined) {
            return "The variable is undefined";
        } else if (variable === null) {
            return "The variable is null";
        } else {
            return `The variable has a value: ${variable}`;
        }
    }

    let a;
    let b = null;
    let c = 42;

    console.log(checkVariable(a)); 
    console.log(checkVariable(b)); 
    console.log(checkVariable(c)); 
}