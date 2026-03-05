const obj={
    name:"adithya",
    lastprice:200,
    currentprice:250
}
console.log(obj.lastprice)
obj.growth=obj.currentprice-obj.lastprice
console.log(obj)
obj.growthpercentage=(obj.growth/obj.lastprice)*100
console.log(obj)