console.log("1");
console.log("2");
//callback 
//callbackhell

setTimeout(()=> {
    console.log("loginuser");
    setTimeout(() =>{
        console.log("get user data");
        setTimeout(() =>{
          console.log("you are a coder")  
        },1400)
    },2000)
}, 1200)

//promise
let newpromiseexample = new Promise((resolve, reject) => {
    let sucess = true;
    if( sucess ){
        resolve("DATA FETCHED");
    }else{
        reject("DATA FETCH FAILED ");
    }
})
newpromiseexample
    .then((data) =>{//success ko data 
        console.log(data);
    })
    .catch((error)=>{// error ko data
        console.error("error", error);
    })
    .finally(() =>{
        console.log("This will always run");
    })
    console.log("3");