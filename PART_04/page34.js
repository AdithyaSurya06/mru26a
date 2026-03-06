import express from "express"

const app=express()
app.set("view engine","ejs")
app.set("views","views")
app.listen(8080,()=>console.log("server started")) 

app.use(express.urlencoded({extended:true}));

const users = [
    {name:"adithya",email:"adithya@gmail.com",password:"1234"},
    {name:"adi",email:"adi@gmail.com",password:"1234"},
    {name:"surya",email:"surya@gmail.com",password:"1234"}
]

app.get("/login",(req,res)=>{
    res.render("login")
});

app.post("/login",(req,res)=>{
     const {email,password} = req.body;
     const user = users.find((user)=> user.email === email)
     if(user){
        if(user.password === password){
            res.redirect("/")
        }else{
            res.redirect("/login")
        }
     }
     else{
        res.redirect("/login")
     }
     res.redirect("/")
});

app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/",(req,res)=>{
    res.render("dashboard",{users})
})