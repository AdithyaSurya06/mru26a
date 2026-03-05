//Nested keys

const employee={
    name:"adithya",
    address:{
        city:"hyderabad",
        state:"telangana"
    }
}
console.log(employee.address.city)
//adding
employee.address.country="india"
console.log(employee)