// JavaScript Program to Validate An Email Address

{
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(email)) {
            return "✅ Valid Email!";
        } else {
            return "❌ Invalid Email!";
        }
    }

    console.log(validateEmail("example@gmail.com")); 
    console.log(validateEmail("example@gmail"));     
    console.log(validateEmail("example.com"));       
}