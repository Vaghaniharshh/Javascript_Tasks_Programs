// JavaScript Program to Check if a Key Exists in an Object

{
    function checkKey(obj, key) {
        if (key in obj) {
            return ` The key "${key}" exists in the object.`;
        } else {
            return ` The key "${key}" does not exist in the object.`;
        }
    }
    const person = {
        name: "Harsh",
        age: 22,
        city: "Mumbai"
    };
    console.log(checkKey(person, "name")); 
    console.log(checkKey(person, "email"));  
}
