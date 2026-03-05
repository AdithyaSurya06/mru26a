// function outer(){
//     let n=1
//     function inner(){
//         return n++
//     }
//     return inner
// }
// const f = outer()
// console.log(f())
// console.log(f())

// function outer(){
//     let password = "1234"
//     function inner(pwd){
//         if(pwd===password){
//             return "Access granted"
//         }
//         else{
//             return "Access denied"
//         }
    
//     }
//     return inner
// }
// const chpassword=outer()
// console.log(chpassword("1234"))

//if else without {}

// function outer(){
//     let password = "1234"
//     function inner(pwd){
//         if(pwd===password) return "Access granted"
//         else return "Access denied"
//     }
//     return inner
// }
// const chpassword=outer()
// console.log(chpassword("1234"))

// ternary operator
function outer(){
    let password = "1234"
    function inner(pwd){
        return (pwd===password)?"access granted":"access denied"
    }
    return inner
}
const chpassword=outer()
console.log(chpassword("1234"))