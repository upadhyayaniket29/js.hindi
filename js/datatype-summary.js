// Primitive :-call by value (copy mai changes honge)

// 7types:- String,Number,Boolean,Null(empty),Undefined ,Symbol,BigInt

// Js is a Dynamically type language 
const score=100
const temp=null
const isloggedin=false
// Here we are not defining its type in starting so it can be called as Dynamically type lanagge 

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id)
console.log(anotherid)
console.log(anotherid==id)


const bigNumber=34785717257351381673516735n

//  n automaticallly big int mai convert 
console.log(typeof(bigNumber))

// Non Primitive or Reference type

// Arrays,Objects,Functions.
// Non Return data type is called functions only and of Functions it is called object function


// Arrays

const heros=["aniket","aryan"]


// Object
const myobject= {

    // name:aniket;
    age:21

}

// Functions

const myfunction=function()
{


};

console.log(typeof temp)
console.log(typeof myobject)
console.log(typeof myfunction)

// Function returns function only but it is called object function

console.log(typeof id)


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object



*/
