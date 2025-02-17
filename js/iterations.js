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

let myArray=["flash ", "superman","batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("detected 5");
        break // yha tak aane ke baad loop break kr jata hai 
        // control flow ko break krne ke liye break likte hai
        
    }
    
    console.log(`value of i is :${index}`)
    
}
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("detected 5");
        continue // 5 ko chod kr aage print krne lg jata hai 
        
    }
    
    console.log(`value of i is :${index}`)
    
}

// While Loop 
let index=0
while (index<=10) { // this is true statement truthy values it will not stop will go on running
    console.log(`value of index is ${index}`);
    index=index+2
    
}


let myArray2=["aniket","elon","musk"]
let arr=0
while (arr<myArray2.length) { // condition in while loop 
    console.log(arr)
    arr=arr+1 // terminate condition for while loop 
    
}


//  Do While Loop pehle kaam hoga phir condition check hogi
// matlab if condition is false even than the code is exceuted atleast once
let score=1
do {
    console.log(`score is ${score}`);
    score++
    
} while (0);


