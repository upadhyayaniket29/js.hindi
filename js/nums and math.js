const score= 400
console.log(score)

const balance= new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

// toFixed used in calculation method or for precesion 
// console.log(balance.toFixed(2))

const otherNumber=123.896

// console.log(otherNumber.toPrecision(3))

const hundreds=10000000

console.log(hundreds.toLocaleString('en-IN'))


















// ++++++++Maths++++++++
// This library comes with js 

console.log(Math)

// console.log(Math.abs(-100))
// console.log(Math.round(5.9))
// console.log(Math.ceil(5.2))
// console.log(Math.floor(5.2))
// console.log(Math.sqrt(2))
// console.log(Math.sqrt(9))
// console.log(Math.sin(135))
// console.log(Math.min(4,3,2,6))
// console.log(Math.max(4,3,2,6))


// Math.random value always lies between 0 to 1

// Used in Dice Game 
console.log(Math.random())
console.log((Math.floor(Math.random()*10))+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)