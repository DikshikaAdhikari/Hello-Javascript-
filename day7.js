//OOP
class student{ // template
}
// way to create object
const stu = new student ()
console.log("class 1", stu);

// constructor = initialize properties
class Students {
    //storing values inside object
   constructor( name, age, location){
    this.name = name;
    this.age = age;
    this.location = location;
   }}
const output = new Students("abcd", 18, "itahari")
console.log("constructor output:", output);

//methods inside classes
class stud {
    constructor(names){
        this.names = names ;
    }
        //method
        greet(){
            console.log(`hello i am ${this.names}`);
        }}
const out = new stud ("Xyz");
out.greet();

//calculator

class calculator{
    add(a,b){
        return a+b;
    }
}
const result= new calculator();
console.log( result.add(2,5));

//Inheritance = extent and super (reusing parent features)
class animal{    //parent
    eat(){
        console.log("eating");
    }
}

class bird extends animal{    //child
}
const res = new bird
res.eat();  //inherits

//super
class reptile{
    constructor(tom) {
        this.tom = tom
        }}
    class tommy extends reptile{
        constructor(tom, breed){
            super(tom)
            this.breed = breed
        }
    }
const rep = new tommy ("my name is tommy and i like coding","german")
console.log("output", rep);
