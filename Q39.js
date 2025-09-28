// JavaScript Program to Remove Specific Item From an Array

{
    let names = ['Kiran', 'Harsh', 'Raju', 'Piyush']
    const indexToRemovename = 3

    console.log("Before removing the Name");
    console.log(names);

    console.log("After removing the Name");
    if (indexToRemovename >= 0 && indexToRemovename < names.length) {
        names.splice(indexToRemovename, 1);

    }

    console.log(names);

}