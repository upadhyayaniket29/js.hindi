// function defination

function saymyname(){
    console.log('a');
    console.log('n');
    console.log('i');
    console.log('k');
    console.log('e');
    console.log('t');
    
}

function addTwoNos (numbers1,numbers2){
    console.log(numbers1+numbers2);
     

}
function addTwoNos (numbers1,numbers2){
    let result=numbers1+numbers2
    return result
     

}

// function have a rule rteurn ke baad wala exceute nhi krega 


addTwoNos(3,undefined)
addTwoNos(3,null)
addTwoNos(3,3)

// Parameters:jo pass horhe hai intial and arguments jo final usme dale

const result=addTwoNos(4,5)

console.log("Result:", result);
// this is coming undefined because no result is stored/returned in function , console in function does not mean to return the value

function userloginmesssage(username="sam"){
    if(!username) // this is same as username===undefined and give same output
    {
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`

}

console.log(userloginmesssage("hitesh"))
console.log(userloginmesssage(""))
console.log(userloginmesssage("aniket")) //important point to keep mind
// values are overwitten if aniket is not mention here than answer is sam 


//some are consider false in js like empty string"" is consider false and same undefined is also false

function calculateCartPrice(val1,val2,...num1){ //we have used here rest operator , spread operator is also 3 dots same
       return num1
}
console.log(calculateCartPrice(200,400,500,2000)) //isme ek hi retrun hoga kyoki function bnya for one only 
// we will solve this by rest operator
// A rest operator is a type of parameter that gets all of the remaining parameters of a function call via an Array.

const user={
    username:"hitesh",
    price:199


}
function handleobjects(anyObjects){
    console.log(`username is ${anyObjects.username} and price is ${anyObjects.price}`);
    
}
// handleobjects(user)

// can pass objects in below way also not required to define seprate 
handleobjects({
    username:"sam",
    price:299
})

const newarray=[200,400,600,800]

function returnSecondValue(getArray){
 return getArray[1]
}
console.log(returnSecondValue(newarray))