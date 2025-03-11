const user={
    username:"aniket",
    logincount:8,
    signedin:true,

    getUserdatails:function(){
        console.log("get user details from database");
        
    }
}

console.log(user.username);
console.log(user.getUserdatails());


// const promiseOne=new Promise()
const date=new Date() // new is a constructor function : nya context function bnane mai kaam aata hai

function User(username,loginCount,IsLoggedIn){
    this.username=username  // left hand side wali variable  , Right hand wale paas krke de rhe hai
    this.loginCount=loginCount
    this.IsLoggedIn=IsLoggedIn

    this.greeting=function(){
        console.log(`welcome to ${this.username}`);
        
    }

    return this // it is defined implicity not writing this also will not hinder our code

}

const UserOne=new User("aniket",12,true)
const UserTwo=new User("aryan",11,false) // UserTwo will here overwrite this function in UserOne , So we use new to avoide this

console.log(UserOne.constructor);  // constructor property here is reference of apne hi baare mai
console.log(UserTwo.constructor); 
console.log(UserTwo instanceof User);  // Give output as Boolean 
//  object instanceof constructor 




