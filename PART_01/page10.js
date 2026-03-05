function greet(){
    console.log("hello world")
}
greet()

//parameter and argument
function greet1(name){                  // name == parameter
    console.log(`hello ${name}`)
}
greet1("adithya")                      // adithya == argument

//addition 
function addition(a,b){
    return a+b
}
console.log(addition(1,2))

//default parameter
function greet2(name="adithya"){                  
    console.log(`hello ${name}`)
}
greet2() 

//replaces default
function greet3(name="adithya"){                  
    console.log(`hello ${name}`)
}
greet3("surya") 

//rest operator
function add(...args){
    console.log(args)
} 
add(1,2,3)
function add1(){
    console.log(arguments)
}
add1(1,2,3,4,5)