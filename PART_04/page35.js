import express from 'express';
const app=express();
const productRouter=express.Router();
const userRouter=express.Router();
productRouter.get("/list",(req,res)=>{
    res.send("Hello World");
});
userRouter.get("/list",(req,res)=>{
    res.send("welcome ");
});
app.use("/products",productRouter);
app.use("/users",userRouter)
const server = app.listen(8000,()=>console.log("Server Started"));

