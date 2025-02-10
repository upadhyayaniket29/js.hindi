const user={
    username:"hitesh",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`) 
        // this is signify the current context(means values) within the scope 

        console.log(this)
    }

}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// console.log(this) // it is showing empty objects since we are running it on node environment
// since in global it does not have any contexts


// In Browser Console it will show window objects

// function chai(){
//     username:"aniket",
//     console.log(this.username) //It is working in objects only we are not able to use in funtions
// }

// chai()


const chai=function(){
    username:"aniket",
    console.log(this.username)
}

chai()

// Function.prototype.bind() method can create a function whose this binding doesn't change, and methods Function.prototype.apply() and Function.prototype.call() can also set the this value for a particular call.


// ++++Arrow Function+++++ 

const chaiandcode = () =>{
    username:"aniket",
    console.log(this)
}
chaiandcode()

// explicit return statement :-Means Jab return statement lgna pad rha hai 

// const addTwo= (num1,num2) =>{
//     return num1+num2
// }

// Implicit return value:single line ka hai toh return nhi likhna padega.
// const addTwo= (num1,num2) =>  num1+num2
// const addTwo= (num1,num2) =>  (num1+num2)
const addTwo= (num1,num2) =>  ({username:"aniket"}) // for returning object we need to wrap in parenthesis only


console.log(addTwo(5,4))