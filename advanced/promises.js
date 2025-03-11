//  Error comes only when browser does not able to make requests only 
// ERROR 404 also will be coming in response only 


const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // DB Calls
    //Crytography , Network calls

    setTimeout(function(){
        console.log('async task is complete');
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
    
}) // Resolve connection is from then


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
        
    },1000)
    
}).then(function(){
 console.log('async 2 resolved');
 
})


const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve({username:"aniket",email:"aniket.com"})
    },1000)
})
PromiseThree.then(function(user){ // resolve mai jo bhi pass krenge wo mil jaega isme

console.log(user);

})

const PromiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({username:"aniket",password:"123"})
        }else{
            reject('ERROR :Something went wrong')
        }
    },1000)
})

PromiseFour.then((user)=>{
console.log(user);
return user.username


}).then((username)=>{
    console.log(username);
    
})

.catch((err)=>{
    console.error(err); // logs the error message 
    
})
.finally(()=>{  // It is default it will always run 
    console.log("The Promise is either reoslved or rejected");
    
})

const PromiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if (!error) {
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('ERROR :JS went wrong')
        }
    },1000)
})


// async / await directly can't handle the errors
async function consumePromisefive (){
   try {
    const Response=await PromiseFive
    console.log(Response);
    
   } catch (error) {
    console.log(error);
    
   }
}

consumePromisefive()

/*
Handling errors gracefully means managing errors in a way that prevents your program from crashing and provides a meaningful response to the user or system. Instead of letting an error break the application, you catch it, log it, and possibly recover from it.

*/


// +++++Fetch +++++++

fetch('https//aniket.com',{header}) // yha pe curly braces ke andar jo chaye wo bhej sakte hai 