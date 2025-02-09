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