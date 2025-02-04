const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}
// course.courseinstructor
//  When coureinstructor need to be called or print output again we will use this method to call them easily within our code
// This Concept is called De Structure
const {courseinstructor:ins}=course

//  array can also be de structure

//  We can change name of it according to our wish 

console.log(ins);


//  Some React Concept

const navbar=({company}) =>{

}
navbar(company="hitesh")


// API se value aati hai unne kaise likte hai , phele XML mai value aati thi
//  ab vale aati hai backend se as JSON .

/*
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy to read and write for humans and easy to parse and generate for machines.
. JSON is built on two structures:OBJECTS AND ARRAYS
JSON is commonly used in APIs to send and receive data between a server and a client.
*/

{
    "name":"Aniket",
    "coursename":"js in hini",
    "price":"free"

   

}

/*
In JSON Keys are always strings, while values can be strings, numbers, arrays, booleans, null, or other objects.
*/

[
    {

    },
    {

    }
    {

    }
]

