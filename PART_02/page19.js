// function f1(){
//     let x=10
// }
// f1()
// console.log(x) //error because,x is accesed only inside function

// let x=10
// function f1(){
//     let x=20
//     console.log(x) //prints 20 ---local priority first
// }
// f1()

// let x=10
// function f1(){
//     console.log(x) //prints 10---no local ,so access global
// }
// f1()

// if(1===1){
//     let x=10
// }
// console.log(x) //error because ,let is block scope


if(1===1){
    var x=10
}
console.log(x) //prints 10 because ,var is no block scope
