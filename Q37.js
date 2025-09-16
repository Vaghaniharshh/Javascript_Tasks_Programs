// JavaScript Program to Create Countdown Timer

{
    let targetDate = new Date("Jan 1, 2026 00:00:00").getTime();

    let timer = setInterval(function () {
        let now = new Date().getTime();
        let diff = targetDate - now;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s");

        if (diff < 0) {
            clearInterval(timer);
            console.log("Happy New Year!");
        }
    }, 1000);

}