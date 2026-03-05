const numbers = [25,21,27,28]
// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i])
// }

//---forEach
numbers.forEach((number)=>{
    console.log(number)
})

//---map
numbers.map((number)=>{
    console.log(number)
})
//map also creates a new array for madified or same values
const newarray = numbers.map((number)=>number+3)
console.log(newarray)

//---filter
const newarray1 = numbers.filter((number)=>number>25)
console.log(newarray1)

//---find  {gives only unique (only first output is recognised rest will be ignored)}
const result = numbers.find((number)=>number>1)
console.log(result)

