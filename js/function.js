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

