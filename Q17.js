//  JavaScript Program to Find HCF or GCD 

{
    let num1 = 20;
    let num2 = 28;
    let hcf = 1;

    let smaller = (num1 < num2) ? num1 : num2;

    for (let i = 1; i <= smaller; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            hcf = i;
        }
    }

    console.log("HCF (GCD) of " + num1 + " and " + num2 + " is " + hcf);

}