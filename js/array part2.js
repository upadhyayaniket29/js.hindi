const marvel_heros=["ironman","hulk","thor"]
const dc_heros=["superman","flash","batman"]

// array can take anything in data even another 

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

console.log(marvel_heros)
const arr=marvel_heros.concat(dc_heros)
console.log(arr)

// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//  ++++++Spread++++++++++++++
// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)

const new_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=new_array.flat(Infinity)
// we need to give numbers in flat how much depth need to be solved 
// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Defaults to 1.

console.log(real_another_array);

console.log(Array.isArray("aniket"))
console.log(Array.from("aniket"))
// by using from it is converted into array
// each value is converted into array

console.log(Array.from({name:"aniket"})) //interesting case , returns an empty array

// If the argument is not iterable but has a length property, it generates an array of the specified length:

console.log(Array.from({ length: 3 })); // [undefined, undefined, undefined]

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.


// Note : If the argument is neither iterable nor has a length property, it produces an empty array.

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))

// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

