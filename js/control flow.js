// condition 
// var scope is complete global 

// const isLoggedIn=true
// const Tempeartue=41

// if(isLoggedIn){
// console.log("1st exceution")
// }
// this code if condition is true will execute

// if(2==="2"){
//     console.log("excuted")

// }
// if(Tempeartue<50){
//     console.log("less than 50 ")

// }
// else{
//     console.log("temperatyre is greater tahn 50 ")

// this code will not run since condition is false

// >,<,<=,>=,==,!= ,=== (Checks type also)


// const score=200

// if(score>100){
//     const power="fly"
//     console.log(`user power:${power}`);
    
    
// }
// console.log(`user power:${power}`);

balance=200

// if(balance>100) console.log("test1"),console.log("test2");// Not to do this way not recommended
  //Impiicit Scope , means manliya scope hai 


//   ++++++Nesting+++

if (balance<100){
    console.log("greater than 100");
    
}
else if (balance<150){
    console.log("greater than 150");
    
}
else{
    console.log("equal to 200");
    
}


const userLoggedIn=true
const DebitCardd=true
const LoggedInfromGoogle=false
const LoggedInfromEmail=true

if(userLoggedIn && DebitCardd && 2==3){
    console.log("allowed shopping ");
    
}
if(LoggedInfromGoogle || LoggedInfromEmail ||true){
    console.log("allow login")
}





    
