// JavaScript Program to Print All Prime Numbers in an Interval

{
    let start = 10, end = 30;

    for (let num = start; num <= end; num++) {
        let isPrime = true;

        if (num <= 1) continue;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }

}