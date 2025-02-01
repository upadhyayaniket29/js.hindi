const arr=[0,1,2,3,4]
console.log(arr[0])

//  ++++++++++++Shallow Copy and Deep Copy++++++++++++++
// Shallow Copy:-Shallow Copy stores the references of objects to the original memory address.   
// Deep Copy :-Deep copy stores copies of the object’s value. (properties do not share the same references)

// we get prototype in array too 
//  lenghth property in arrays too


// ++++ Array Methods +++++

arr.push(6)
// add values in arrays
arr.pop()
// remove last value in array
arr.unshift(9)
// unshift enter value at starting of the array
// unshift is not consider good beacuse it need to shift the entire array positions
arr.shift()
// shift is like pop of unshift
// shift:-removes first elemenet from the array

// push insert the elements in array
// console.log(arr)

console.log(arr.includes(9))
// checks if value is included in array or not 
console.log(arr.indexOf(9))
// values if not exist than result :-1

const newarr=arr.join()

console.log(arr)
console.log(newarr)
// join converts in an string from array 


// ++++++Slice and splice++++++++

const myarr2=[1,2,3,4,5,6]
const ny1=myarr2.slice(1,3)
console.log("A",myarr2)

const ny2=myarr2.splice(1,3)
console.log("B",myarr2)

/*++++++++  The main difference between slice and splice is slice print the same array without changing it and splice 
prints the array after removing the splice part.++++++++++*/

//  In  javascript it create the shallow copy , shallow copy is one which have same references.

// Deep cpy of an object is a copy whose properties do not share the same reference


