const score= 400
console.log(score)

const balance= new Number(100.123)
// now it is sure that it will be a number
console.log(balance);


console.log(typeof(balance));
// type object 

console.log(typeof(balance.toExponential()));
// type string
console.log(balance.toPrecision(3).length);
// can use sting property now since it is converted to string and precision returns string

console.log(typeof(balance.toPrecision()));
// we needd precise value 
// type string
console.log(balance.toLocaleString());
// type string
console.log(typeof(balance.toLocaleString()));
// (1e+2) is read as "one times ten to the power of two".

console.log(balance.valueOf());
// When JavaScript expects a primitive value but an object is provided, it automatically calls valueOf() to convert the object into a primitive.
console.log(balance.toString().length);
// Since now it has become the string we can use the proprties of string in it 
console.log(balance.toFixed(2));
// The toFixed() method in JavaScript is used with numbers to format them to a fixed number of decimal places.
// toFixed() is generally used in ecommerce 




// console.log(balance);



// toFixed used in calculation method or for precesion 
// console.log(balance.toFixed(2))

const otherNumber=123.896

// console.log(otherNumber.toPrecision(3))

const hundreds=10000000

console.log(hundreds.toLocaleString('en-IN'))



// ++++++++Maths++++++++

// This library comes with js 

console.log(Math)

// properties can be accesssed directly just by using dot 

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