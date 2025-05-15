import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('dev'));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

var userPassword = false;

app.use(express.static('public'));

function checkPassword(req, res, next) {
    const password = req.body["password"];
    if (password === "Sultan") {
        console.log("Password is correct");
        userPassword = true;
        next();
    } else {
        res.send('Wrong Password');
    }
}
app.use(checkPassword);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.post("/check", (req, res) => {
  if (userPassword) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(__dirname);
});