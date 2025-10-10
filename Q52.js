// JavaScript Program to Pass a Function as Parameter

{
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }

    function saySomething(fun, name) {
        fun(name); 
    }

    saySomething(greet, "Harsh"); 
}
