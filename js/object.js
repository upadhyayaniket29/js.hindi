// Singleton
// Object.create

// Object Literals

const JsUser= {
    name:"Hitesh",
    age:21,
    location:"gwalior",

}
console.log(JsUser.name)
console.log(JsUser.age)
console.log(JsUser.location)
console.log(typeof JsUser.location)

Object.freeze(JsUser)
