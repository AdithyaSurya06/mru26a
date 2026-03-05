const products=[
    {id:1,name:"product 1",price:25},
    {id:2,name:"product 2",price:50},
    {id:3,name:"product 3",price:45}
]

let cart =[]
//display all products using for each
function displayproducts(){
    products.forEach((product)=>{
       console.log(product)
    })
}

//display products with price above 40
const array=products.filter((product)=>product.price>40)
console.group(array)

//add product2 to cart using spreadoperator with a new key quantity and assign 1
function addtocart(id){
    let p=products.find((product)=>product.id===id)
    if(p){  
        let p_withquan={...p,quantity:1}
        cart=[...cart,p_withquan]
}
    }
    

//displaying cart
function displaycart(){
    console.log(cart)
}

displayproducts()
addtocart(2)
displaycart()