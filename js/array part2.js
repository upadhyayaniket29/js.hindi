const marvel_heros=["ironman","hulk","thor"]
const dc=["superman","flash","batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros)
marvel_heros.concat(dc)


console.log(marvel_heros)

const new_heros=[...marvel_heros ,...dc]
console.log(new_heros)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"})) //Interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
