const UserEmail=[]

if(UserEmail){ // Truthy :- yha pe man lete hai string ke andar true values hai 
    console.log("have user email");
    
}
else{ // empty string hoti toh man lete hai false hai 
    console.log("don't have user email");
    
}

// falsy values 

// false , 0 ,-0 ,BigInt 0n ,"" ,null ,undefined ,NaN 
// other than these all are truthy values

// truthy values
// "0" , 'false' ," " ,[] ,{} ,function(){}(empty function)


if(UserEmail.length==0){
    console.log("array is empty ")
}

const emptyObj={}

if(Object.keys(emptyObj).length==0){
    console.log("empty objects");
    
}


// Nullish Coaleshing Opeartor (??) : null , undefined 
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1
val1=5??10
val2= null??12
val3= null??undefined
val4= undefined??30
val5= undefined??null
val6= null??100??200 // phele jo value mil jaegyi wo hi assign hojaegyi

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);


// Terniary Opeartor 

// condition ? true : false


const iceTeaPrice=80

iceTeaPrice >=60 ?console.log("more than 60 "):console.log("less than 60 ");



