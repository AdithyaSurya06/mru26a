function greet(name,callback){
    callback()
    console.log(`welcome ${name}`)
}
greet("adithya",()=>{
    console.log("hello")
})