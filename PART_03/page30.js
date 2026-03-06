//---setTimeout---\

//setTimeout(()=>{},3000) --syntax

// console.log("begin")
// setTimeout(()=>{
//     console.log("hello")},3000)
// console.log("end")

function f1(){
    console.log("beginning")
}
function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             console.log("hello")
            resolve()
            // reject("something went wrong")
        },3000)

    })
}
function f3(){
    console.log("ending")
}

async function main(){
    try{
        f1()
        await f2()
        f3()
    }catch(err){
        console.log(err)
    }
}
main()