// Singleton
// literals ki tarh singleton nhi
// constructor se hamesha singleton banega 
// Object.create:-can create objects by this method also (constructor method) 

// Object Literals
//  object mai key value pair se define krte hai , name is key and hitesh is value 

// Symbols
const mysym=Symbol("key1")


const JsUser= {
    name:"Hitesh",
    age:21,
    location:"gwalior",
    [mysym]:"sym1", // symbol ko key ke tarah act , symbol definced as brackets 
    email:"aniket@gmail.com",
    isloggedIn:false

}
// in gen we will cal by dot(.) only but in general cases we will be calling by brackets[].

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser[mysym]);


console.log(JsUser.name)
console.log(JsUser.age)
console.log(JsUser.location)
console.log(typeof JsUser.location)

// Object.freeze(JsUser)
// use to freeze changes , means we can't have further change in it .

JsUser.email="aniket2gmail.com"
console.log(JsUser.email);
console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");
    
}
JsUser.greetingtwo=function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
// function is not executed only its reference is came





