const stock =[{
    name:"wipro",
    lastprice:200,
    currentprice:250
},
{
    name:"deolite",
    lastprice:250,
    currentprice:270
}
]
function calc(obj){
console.log(obj.lastprice)
obj.growth=obj.currentprice-obj.lastprice
console.log(obj)
obj.growthper=(obj.growth/obj.lastprice)*100
console.log(obj)
}
calc(stock[0])
calc(stock[1])