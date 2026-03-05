const stock ={
    name:"wipro",
    lastprice:200,
    currentprice:250,
    growth:function(){
       return this.currentprice-this.lastprice
    },
    growthper:function(){
       return (this.growth()/this.lastprice)*100
    }
}
console.log(stock.growth())
console.log(stock.growthper())

//arrow function
// const stock ={
//     name:"wipro",
//     lastprice:200,
//     currentprice:250,
//     growth:()=>this.currentprice-this.lastprice,
//     growthper:()=>(this.growth/this.lastprice)*100
// }
// console.log(stock.growthper()) //shows error because,no this keyword is used in arrow function