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

})