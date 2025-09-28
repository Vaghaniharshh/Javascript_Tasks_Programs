// JavaScript Program to Insert Item in an Array

{
    let fruits = ["apple", "banana", "mango"];
    fruits.splice(1, 0, "orange"); // insert at index 1
    console.log(fruits); // ["apple", "orange", "banana", "mango"]
}