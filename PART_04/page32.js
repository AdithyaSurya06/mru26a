async function getData(){
    try{
        const url = "https://jsonplaceholder.typicode.com/users"
        const result = await fetch(url)
        const data = await result.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
getData()