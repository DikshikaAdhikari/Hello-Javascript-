// creating array
const arr = [1, 2, 3, "abcd", true, false, {}, []];
console.log("output:", arr);
//accessing array
const arrayn=[1,2,3,4,5];
console.log("accessing", arrayn[3]);

//modifying array , basic array
//1. push
arrayn.push(6, 7)
console.log("push", arrayn);

//2.pop
arrayn.pop()
console.log("pop", arrayn);

//3.slice
 const slice = arrayn.slice(2,5)
console.log("slice", slice);

//4. splice
const splice = arrayn.splice(2,5)
console.log(splice);

// for each, map, find, filter
const aaray =[10, 20, 30, 40]
 const foreachvalue= aaray.forEach((value)=>{
console.log(value);
})
console.log("foreach output", foreachvalue);
//map
aaray.map((value)=>{
console.log("map output", value);
})
//find
let number = [10, 20, 30, 40];
let find = number.find(num => num > 25);
console.log("findoutput", find); 
//filter
let numbers = [10, 20, 30, 40];
let result = numbers.filter(num => num > 20);
console.log("filter", result);