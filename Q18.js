//  JavaScript Program to Find LCM 

{
    let num1 = 12;
    let num2 = 18;

    let lcm = (num1 > num2) ? num1 : num2; 

    while (true) {
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            console.log("LCM of " + num1 + " and " + num2 + " is " + lcm);
            break;
        }
        lcm++;
    }

}