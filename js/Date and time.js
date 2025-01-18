let mydate= new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toJSON())
// console.log(mydate.toUTCString('en-IST'))
console.log(typeof mydate)

// Date is an Object 

let mycreatenewdate= new Date(2023 ,0,23)
console.log(mycreatenewdate.getTime())

// in JS Month start with  0.
// console.log(mycreatenewdate.toDateString())
// console.log(mycreatenewdate.toLocaleString())

// let mytimestamp=Date.now()

// console.log(mytimestamp)
// console.log(mytimestamp.getDay())

// timestamp gives the millisecond value from the starting date

let newday=new Date()
console.log(newday.getDay())
console.log(newday.getMonth())
console.log(newday.getYear())


// newday.toLocaleString('default' ,{
//     weekday:'long',
// })
// This is defined as another new version
