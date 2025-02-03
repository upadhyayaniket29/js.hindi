const tinder=new Object()

console.log(tinder);

tinder.id="1234"
tinder.name="aniket"
tinder.isLoggedIn=false

console.log(tinder);

// we can define objects inside objects
const regularuser={
    email:"aniket@gmail.com",
    fullname:{
         username:{
                 firstname:"aniket",
                 lastname:"upadhyay"     
         }
    }
}

console.log(regularuser.fullname?.username.firstname);

// optional chaining ? if exist or not so put ? 


const obj1={a:"1",b:"2"}
const obj2={c:"3",d:"4"}

const obj3={obj1,obj2}
console.log(obj3);
//  to return objects combining w euse this method 
const obj4=Object.assign({},obj1,obj2)

/* we take as blank object in starting to use it as a target since assign 
required a target object as according to it syntax*/
// const returnedTarget = Object.assign(target, source);


// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.



console.log(obj4);
//  we will use spread concept only 
//  it is used in array as well as in objects 
const obj5={...obj1,...obj2}
console.log(obj5);


// users when come from data base usually comes as array of objects

const users=[
    {
        email:"aniket@gnail.com",
        name:"aniket"
    },
    {
        email:"aniket@gnail.com",
        name:"aniket"
    }
]

console.log(users[1].email);

console.log(tinder);

// ++++++data type of these is array ++++++
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
// array inside arrays
console.log(Object.entries(tinder));

console.log(Object.hasOwnProperty('name'));
console.log(Object.hasOwnProperty('id'));






 






