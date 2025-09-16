// JavaScript Program to Format the Date

{
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year2 = today.getFullYear();

    console.log("Formatted Date:", day + "-" + month + "-" + year2);

}