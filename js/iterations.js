// for  Loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
    
// }

// for (let i = 0; i < 10; i++) {
    
//     console.log(`outer loop value is ${i}`)
//     for (let j = 0; j < 10; j++) {
//         console.log(`outer loop is ${i} Outer loop is ${j}`);
        
        
//     }
    
// }

// let myArray=["flash ", "superman","batman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log("detected 5");
//         break // yha tak aane ke baad loop break kr jata hai 
//         // control flow ko break krne ke liye break likte hai
        
//     }
    
//     console.log(`value of i is :${index}`)
    
// }
// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log("detected 5");
//         continue // 5 ko chod kr aage print krne lg jata hai 
        
//     }
    
//     console.log(`value of i is :${index}`)
    
// }

// While Loop 
// let index=0
// while (index<=10) { // this is true statement truthy values it will not stop will go on running
//     console.log(`value of index is ${index}`);
//     index=index+2
    
// }


// let myArray2=["aniket","elon","musk"]
// let arr=0
// while (arr<myArray2.length) { // condition in while loop 
//     console.log(arr)
//     arr=arr+1 // terminate condition for while loop 
    
// }


// //  Do While Loop pehle kaam hoga phir condition check hogi
// // matlab if condition is false even than the code is exceuted atleast once
// let score=1
// do {
//     console.log(`score is ${score}`);
//     score++
    
// } while (0);


// for of 


// const arr=["1","2","3","4"]

// for (const element of arr) { //The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
//     console.log(element)
// }

// const greetings="hello world"
// for (const greet of greetings) {
//     console.log(greet);
    
// }

// const number="!2132"
// for (const num of number) {
//     console.log(num);
    
// }


// Maps
/*

Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. 

Map is known for its unique values

jis order mai dale ussi order mai rehte hai 


*/




// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of amercia")
// map.set('Fr',"France")
// map.set('IN',"India")

// console.log(map)

// for (const [key,values] of map) {
//     console.log(key,values);

    
    
// }

// const myObject={
//     game1:"NFS",
//     game2:"GTA"
// }
// for (const [key,values] of myObject) { // Object is not iterable in this way
//     console.log(key,values);
    
// }


// for in loop

const s=["cpp","js","python","docker"]

for (const key in s) { // array ka key is index number only 
    console.log(key);
    
}

const newObj={
    js:"javascript",
    cpp:"c++",
    py:"python"
}

for (const key in newObj) {
    console.log(key); // yha pe object ki key aayi 
    
}
for (const key in newObj) {
    console.log(newObj[key]); // yha pe object ki values aagyi  
    
}


const map=new Map() // Map is not iterable 
map.set('IN',"India")
map.set('USA',"United States of amercia")
map.set('Fr',"France")
map.set('IN',"India")


for (const key in map) {
   console.log(key);
   
}


// For Each Loop

const coding=["java","ruby","cpp","python","js"]

coding.forEach()


