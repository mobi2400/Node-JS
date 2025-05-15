import express from "express";
import bodyParser from "body-parser";
import {dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var bandName = "";
app.use(bodyParser.urlencoded({extended: true}));


// function bandNameMiddleware(req, res, next) {
//   console.log(req.body);
//   bandName= req.body["street"] + req.body["pet"];
//   next();
// }

// app.use(bandNameMiddleware);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  bandName= req.body["street"] + req.body["pet"];
  console.log(req.body);
  res.send(`<h1>Your band name is ${bandName}</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});