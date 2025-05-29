import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;
const saltRound = 10;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Secret",
  password: "Khan9931@#",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register",async (req,res)=>{})

app.post("/login",async(req,res)=>{})

app.listen(port,(req,res)=>{
    console.log(`host listening on port ${port}`);
    
})