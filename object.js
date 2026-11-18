//objects
//data of students
const student ={
    name:"Dikshika",
    rollno: 36,
    age: 21,
    address: "itahari"
}
   console.log("student:", student);
//specific data
   console.log( "student age", student.age);
//basic add
   student.address="sundarharaicha";
   console.log("add", student);
//update
   student.address="baliya";
   console.log("update", student);
//delete
  delete student.address;
  console.log("delete", student);
//nested
  const person ={
    fullname:"Dikshika Adhikari",
    location: {
        city:"itahari",
        wardno:"6",
        tole:"milanchowk"
}, 
greet: function(){
    console.log("hello i am " + this.fullname + " i am from " + this.location.city);
}
}
person.greet()
console.log("nested data", person.location.tole);

//array of objects
const language =[
    {name:"DA", age:21},
    {name:"PG", age:25}
]
console.log("out", language);

//filtering mapping complex data
let lang = language.filter(n => n.age = 21)
console.log(lang);

//map
let lan = language.map(n => n.name)
console.log(lan);

//combination
let output2 = language
    .filter((n) => n.age = 21)
    .map((n) => n.name)
console.log("result", output2)
