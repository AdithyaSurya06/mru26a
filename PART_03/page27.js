//------Arrays----

//Array creation
let employees=["john","mike","ali"]
// let passengers=new Array("adi","diwakar")
employees=[...employees,"adithya"] //spread operator
employees.push("diwakar") //push
console.log(employees)
console.log(employees.length)
console.log(employees[0])

//iteration

// for(let i=0;i<employees.length;i++){
//     console.log(employees[i])
// }
for(let e of employees){
    console.log(e)
}




