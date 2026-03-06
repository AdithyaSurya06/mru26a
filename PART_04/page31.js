function placeorder(){
    console.log("order has been placed")
}
function makepayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("payment has been placed")
            reject("payment failed")
        },3000)
    })
}
function sendconfirmation(){
    console.log("confirmation hs beeb sent")
}
async function main(){
    try{
        placeorder()
        const result = await makepayment()
        console.log(result)
        sendconfirmation()
    }
    catch(err){
        console.log(err)
    }
}
main()