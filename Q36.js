// JavaScript Program to Compare The Value of Two Dates

{
    let date1 = new Date("2025-09-16");
    let date2 = new Date("2025-09-10");

    if (date1 > date2) {
        console.log("date1 is after date2");
    } else if (date1 < date2) {
        console.log("date1 is before date2");
    } else {
        console.log("Both dates are equal");
    }

}