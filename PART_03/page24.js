const employee={
    name:"adithya",
    city:"hyderabad",
    state:"telangana",
    country:"india"
}
//storing in variables
const name = employee.name
const city = employee.city
//destructuring
const {state,country} = employee
console.log(state)
console.log(country)