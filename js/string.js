const name="aniket"
// const repocount=10


// console.log(name +repocount+" value");

//  +++++++++++++++++++String Interpolation+++++++++++++++++


// console.log(`hello my name is  ${name} and my repo count is ${repocount}` )

const newname= new String('aniketu')

console.log(newname[0])
// console.log(newname.__proto__)

// console.log(newname.length)

// console.log(newname.toUpperCase())

// console.log(newname.charAt(2))
// console.log(newname.indexOf("a"))


// const newname2= newname.substring(0,4)
// substring does not obey if we give its negative values it will start from 0 only
// slice obey negative values as well , it can give negative values.

// console.log(newname2)


// // +++++String++++
// console.log(newname2.substring(0,4))



// const name2=' aniket   '
// console.log(name2)
// console.log(name2.trim())
//  trim remove start and end space
// // Trim is a function
// console.log(name2.trimEnd())
// console.log(name2.trimStart())

// Replace and include
// const meraname='aniketUPA'
// console.log(meraname.replace('aniket','aryan'))
// console.log(meraname.includes('gh'));

// console.log(meraname.split(""))
// split converts into array based on character 
// console.log(meraname.toUpperCase());
// console.log(meraname.toLowerCase());

// console.log(meraname.valueOf())

// ++++++++ toWellFormed ++++++++++
// console.log(meraname.toWellFormed())

// +++++++++++ tostring ++++++++++++
// Returns the value of string 
// console.log(meraname.toString())


const gameName = new String('hitesh-hc-com        ')

console.log(gameName.blink())
//it closed the string sentence inside the blink statement
console.log(gameName.anchor());
// The anchor method embeds the string in an <a> element with a name
console.log(gameName.at());

console.log(gameName.charAt(2));

console.log(gameName.bold());
// The bold() method of String values ​​creates a string that embeds this string in a <b> element ( <b>str</b> ), which causes this string to be displayed as bold .
console.log(gameName.indexOf('t'))
// The indexOf() method returns the position of the first occurrence of a value in a string . 
console.log(gameName.indexOf('z'))
// The indexOf() method returns -1 if the value is not found.
console.log(gameName.big());
/*The big() method of String values ​​creates a string that embeds this string in a <big> element ( <big>str</big> ), which causes this string to be displayed in a big font */
console.log(gameName.charCodeAt(2));
// The charCodeAt() method is a Javascript function that returns a Unicode value representing the character at the specified index in a string 

console.log(gameName.codePointAt(2));
// The codePointAt() method returns the Unicode value at an index (position) in a string .

/* 
charCodeAt() is UTF-16, codePointAt() is Unicode . charCodeAt() returns a number between 0 and 65535. Both methods return an integer representing the UTF-16 code of a character, but only codePointAt() can return the full value of a Unicode value greater than 0xFFFF (65535).

*/

console.log(gameName.italics());
console.log(gameName.isWellFormed());
// isWellFormed() allows you to test whether a string is well-formed (ie does not contain any lone surrogates).

/*
A "lone surrogate" is a 16-bit code unit satisfying one of the descriptions below: It is in the range 0xD800–0xDBFF , inclusive (ie is a leading surrogate), but it is the last code unit in the string, or the next code unit is not a trailing surrogate.

*/

console.log(gameName.endsWith('com'));
// endsWith() method is used to check whether the given string ends with the characters of the specified string or not 
console.log(gameName.localeCompare('com'));

/* Syntax of LocaleCompare

localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)

*/
console.log("a".localeCompare("b"));
// The letter "a" is before "b" yielding a negative value
console.log("aniket".localeCompare("aryan"));
// The word "aniket" is before "aryan" yielding a negative value
console.log("a".localeCompare("a"))
// The letter "a" is equal to "a" yielding a 0 value.
console.log("c".localeCompare("a"))
// The letter "c" is after "a" yielding a positive value


console.log(gameName.length);
// Length is not a method, it is a property 
/*
When we use. length, you are just asking the JavaScript interpreter to return a variable stored within an object; we are not calling a method.
*/

console.log(gameName.match());
/*

The match() method matches a string against a regular expression 
The match() method returns an array with the matches.
The match() method returns null if no match is found.

*/

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.toLocaleUpperCase());
// The toLocaleUpperCase() method returns the value of the string converted to upper case according to any locale-specific case mappings . toLocaleUpperCase() does not affect the value of the string itself.

// console.log(gameName.trimEnd());
// trim the string from end 
// console.log(gameName.trimStart());
// trim the string from Start
// console.log(gameName.trim());
// trim form starting and end both used generally 

console.log(gameName.padStart(16));
// In JavaScript, the .padStart() method generates a new string of a specified length by adding a given padding string to the beginning of the original string. The padding string is repeated as needed until the target length is reached.
























