//creating object

// const obj ={
//     name:"adithya",
//     skill:"java"
// }
// console.log(obj)

//2nd way

const obj = new Object()
obj.name="adithya"
obj.skill="java"
console.log(obj)
//adding key,value into object
obj.score=97
obj["rank"]=1
console.log(obj)

let key ="city"
let value = "hyderabad"
// obj.key=value //obj.key stores key not city
obj[key]=value
console.log(obj)

//delete
delete obj.skill
console.log(obj)