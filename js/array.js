const arr=[0,1,2,3,4]
console.log(arr[0])

arr.push(6)
arr.pop()
arr.unshift(9)
// unshift enter value at starting of the array
arr.shift()
// shift is like pop of unshift
// push insert the elements in array
// console.log(arr)

// console.log(arr.includes(9))
// console.log(arr.indexOf(9))


// Slice and splice

const myarr2=[1,2,3,4,5,6]
const ny1=myarr2.slice(1,3)
console.log("A",myarr2)

const ny2=myarr2.splice(1,3)
console.log("B",myarr2)

//  In  javascript it create the shallow copy , shallow copy is one which have same references.

// Deep cpy of an object is a copy whose properties do not share the same reference


