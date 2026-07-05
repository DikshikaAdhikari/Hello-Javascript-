//Async Await 

async function greet(){
    return "hello everyone";
}
greet()
  .then((data) =>{
   console.log ("async data:", data); 
})

// await -try/catch
.catch ((error) =>{
    console.log("async error", error)
})
//Await -waits or holds the data 

function data1(){
    const data2 = new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            const dataachieved = "data loaded"
            resolve (dataachieved)
        }, 4000)
    })
    return data2
}
async function showdata() {
    console.log("loading ");
    const result = await data1()
    console.log (result)
    
}
showdata()