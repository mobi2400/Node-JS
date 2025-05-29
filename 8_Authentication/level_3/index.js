import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/login",(req,res)=>{})

app.get("/register",(req,res)=>{})

app.post("/login",(req,res)=>{})

app.post("/register",(req,res)=>{})
app.listen(port,(req,res)=>{
    console.log(`website is listening at ${port}`);
    
})