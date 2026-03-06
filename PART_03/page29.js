//---some {aleast one is element satisty the condition then true }
const numbers = [25,23,22,26]
const result = numbers.some((number)=>number>25)
console.log(result)

//---every {all elements should satisfy the condition then true}
const res = numbers.every((number)=>number>20)
console.log(res)