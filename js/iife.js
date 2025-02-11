// Immediately Invoked Functions Expressions (IIFE)
// Global Scope ke pollution se problem hoti hai usko hatane ke liye iife ka use kiya 
// An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. It is also known as a self-executing anonymous function.

(function chai(){
    //Named IIFE 
    console.log('DB Connected')
})();

// IIFE invoke hogye but usse nhi pta kha rokhna hai usse btna eke liye semicolon(;) use hoga

// Arrow function is also working 

((name)=> {
    // Simple IIFE 
    console.log(`DB Connected Two ${name}`)
})('aniket'); //this will be treated as function only name passed in parenthesis

 // async IIFE
(async () => {
    console.log("aniket is a good guy")
  })();

  /*
In JavaScript, async is a keyword used to declare an asynchronous function. It allows you to write functions that perform asynchronous operations, like fetching data from a server or reading a file, while maintaining a cleaner and more readable code structure.

When a function is declared with async, it automatically returns a Promise, and you can use the await keyword inside it to pause the execution until a Promise is resolved or rejected.


  */