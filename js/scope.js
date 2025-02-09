// {} - Scope :-Global Scope and Local Scope
// Global is availble in block but block values is not avialble in block 
var c=300
let a=400
if(true){
    let a=10;
    const b=20;
    var c=30;
    console.log("Inner: ",a)
}
// block scope which is inside this block only
var c=40

console.log(a)
// console.log(b)
console.log(c) // var is giving the problem it should not be implemented but still it is implememtd here

// jitne {} curly braces utne scope


// ++++++++ Browser ke console mai Global scope , Core Scope alg hota hai and code environment mai scope alg hota hai..


// Nested Scope

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website);
    // two()
    
}
one()

// in nested scope child function parent ke variable ko access kr patte hai 

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube "
        console.log(username+website);
        
    }
    // wrong scope :- console.log(website);
    

}
// wrong scope:- console.log(username);


// +++++++ Interesting ++++++++++


//  Two Techniques of Making function 
console.log(addOne(5))
function addOne(num){  // 1st Method , here we are just declaring function 
    return num+1

}


// This down is also known as expression 
addTwo(5) // this will give error in this method if we are calling function before initialization

const addTwo=function (num){  //2nd Method  here we are holding it in a variable 
    return num+2
}


// +++++Hoisting ++++



