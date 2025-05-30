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

app.use(session({
    secret:"TopSecretword",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000*60*60*24,
    }
}));

app.use(passport.initialize())
app.use(passport.session())

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Secret",
  password: "Khan9931@#",
  port: 5432,
});
db.connect();


app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/login",(req,res)=>{})

app.get("/register",(req,res)=>{})

app.get("/secrets",(req,res)=>{
    if(req.isAuthenticated()){
        res.render("secret.ejs")
    }
    else{
        res.redirect("/login")
    }
})

app.post("/login",passport.authenticate("local",{
  successRedirect : "/secret",
  failureRedirect : "/login"
}))

app.post("/register",async (req,res)=>{
    const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.row[0];
          req.login(user,(err)=>{
            console.log(err)
            res.redirect("/secrets")
            
          })
          res.render("secrets.ejs");
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
})

passport.use(
    new Strategy(
         async function verify(username,password,cb){
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          return cb(err)
        } else {
          if (result) {
            return cb(null , user)
          } else {
          return cb(null , false)
          }
        }
      });
    } else {
      return cb("User not found")
    }
  } catch (err) {
    console.log(err);
  }
}))

passport.serializeUser((user,cb)=>{
  cb(null,user);
});

passport.deserializeUser((user,cb)=>{
  cb(null,user);
})
app.listen(port,(req,res)=>{
    console.log(`website is listening at ${port}`);
    
})