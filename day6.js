// template literal = dyanamic way to represent string
const name= "js"
console.log(`hello ${name} ${5+5}`)     //es6
console.log("hello" + name)        //es5

//destruction = value access garne (array, object, json)
// object
const person = {
    fname: "javascript",
    founder: "me",
}
console.log("es5",  person.fname) //es5
 
const{fname, founder} = person; //es6
console.log("es6", founder);

//Array destructuring
const array =[1,2,3,4,5,6]
//es5
console.log("es5", array[0])
console.log("es5", array[1])
console.log("es5", array[2])
console.log("es5", array[3])
console.log("es5", array[4])
//es6
const [a,b,c,d,e]= array;
console.log("es6", e)
console.log("es6", a)

//spread operator = expanding data
//object
const sobj = {
    fullname: "js",
    founders: "me",
}
const data = {...sobj}
console.log("data", data);

//array
const arrayspreaddata = [1,2,3,4];
const num= [...arrayspreaddata ,5,6,7]
console.log(`spread data ${num} is this`)

//rest parameter = mostly used function
function restvalue(...val){
    const values = val ;
    return values
}
const arr = restvalue(1,2,3,4,5,6)
console.log("rest value", arr);

//optional chaining ?
const datas = {
    author:{ namm: "youtube"}
    }
const output = datas.author?.namm
console.log("data", output);

//nullish coalescing ?? = like if else
const username= null;
console.log(" nullish data", username?? "guest")

//short-circuit eveluation -&& and ||
// || -or operator
/*if (true || false){
    return true
}else if (true || true){
    return true
}else if (false || false){
    return false
}else if (false || true){
    return true
}else {
    console.log("hello i am a student")
}*/

//example 
const value1 = true
const value2 = false;
if(value1 || value2)
console.log("value is true");
else console.log("value is false");


// && -AND operator
/*if (true || false){
    return false
}else if (true || true){
    return true
}else if (false || false){
    return false
}else if (false || true){
    return false
}else {
    console.log("hello i am a student")
}*/

//example
const value3 = false
const value4 = true;
if(value3 && value4)
console.log("value is true");
else console.log("value is false");

