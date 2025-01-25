let mydate= new Date()
console.log(mydate);
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString());
/*
In JavaScript, ISO string refers to the ISO 8601 format, which is a standard for representing date and time. 
It's commonly used to represent dates in a machine-readable format, ensuring consistency across different systems and time zones.

*/
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toJSON())
// how to use JSON ?


// console.log(mydate.toUTCString('en-IST'))
console.log(typeof mydate)

// ++++++++++Date is an Object ++++++++++ 

// let mycreatenewdate= new Date(2023 ,0,23)
let mycreatenewdate= new Date("01-14-2023")
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


/*newday.toLocaleString('default' ,{
    weekday:'long',
    timezone:
})*/
// ++++++++++++++++used in customisation of format +++++++++++++


// This is defined as another new version
let mytimestamp=Date.now()
// 1970 se abhi tk ka milli sec value 

console.log(mytimestamp)
console.log(mycreatenewdate.getTime())

// ++++++++++++++++++used to convert millisecond to second++++++++++++++++++++++++
console.log(Math.floor(Date.now()/1000));

// `${newDate.getDay()} and the time is `


