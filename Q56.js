//  JavaScript Program to Remove a Property from an Object

{
    function removeProperty(obj, key) {
        if (key in obj) {
            delete obj[key];
            return `Property "${key}" removed successfully.`;
        } else {
            return `Property "${key}" does not exist.`;
        }
    }

    const student = {
        name: "Harsh",
        age: 22,
        course: "JavaScript"
    };

    console.log(removeProperty(student, "age"));
    console.log(student);
}

