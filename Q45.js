// JavaScript Program to Get Random Item From an Array

{
    let colorss = ["red", "green", "maroon", "yellow", "purple"];
    let randomIndex = Math.floor(Math.random() * colorss.length);
    let randomItem = colorss[randomIndex];

    console.log(randomItem);

}