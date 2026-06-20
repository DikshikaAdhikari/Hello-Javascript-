//function declaration
//function functionName(parameter1, parameter2){
    //return parameter1 + parameter2;
//}
 //functionName(argument1, argument2)
 //function declaration
// sum of two numbers
  
 function sum(a , b ){
    return a+b;
 }
  let result = sum(10, 20);
    console.log(result);

    // arrow function
    const add =(a , b ) => {
      return a+b;  
    }
    console.log( add (100, 200));

    //check odd even
    function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkOddEven(14));
console.log(checkOddEven(77));

//calculator function 
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        default:
            return "Invalid Operator";
    }
}
console.log(calculator(10, 20, "+"));
console.log(calculator(10, 30, "-"));
console.log(calculator(10, 50, "*"));
console.log(calculator(10, 40, "/"));