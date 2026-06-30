//Assignment
//unshift : Adds one or more elements to the beginning of an array
let fruits = ["Apple", "Banana"];
fruits.unshift("Mango");
console.log("unshift",fruits);

//shift: Removes the first element from an array
let fruit = ["Apple", "Banana", "Mango"];
let removed = fruit.shift();
console.log(removed); 
console.log(fruit);  

//includes: Checks whether an array contains a specified value
let fruitt = ["Apple", "Banana", "Mango"];
console.log(fruitt.includes("Banana")); 
console.log(fruitt.includes("Orange")); 

//indexof:Returns the index/position of an element.If not found,returns -1
let fruitss = ["Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Banana")); 
console.log(fruits.indexOf("Orange")); 