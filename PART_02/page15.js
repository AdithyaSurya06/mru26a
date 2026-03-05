//regular

function f1(a,b){
    return a+b
}
console.log(f1(1,2))

//arrow function

const f2 = (a,b)=>{
    return a+b
}
console.log(f2(1,1))

// arrow function with no {},return

const f3=(a,b)=>a+b
console.log(f3(1,3))

//arrow function with no ()

const f4=a=>a*a
console.log(f4(3))