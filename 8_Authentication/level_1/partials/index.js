import express from "express";
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extende: true}))
app.use(express.static("public"))

app.get("/",(res,req)=>{
    res.render("home.ejs")
})

app.get("/login",(req,res)=>{
    res.render("login.ejs")
})

app.get("/register",(req,res)=>{
    res.render("register.ejs")
})

app.post("/register",(req,res)=>{

})

app.post("/login",(req,res)={

})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
    
})