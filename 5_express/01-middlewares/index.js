import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';
import morgan from 'morgan';
const app = express();
const port = 3000;
app.use(morgan('combined'));
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/submit', (req, res) => {
    console.log(req.body);
    res.sendStatus(201);

});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(__dirname);
    
});

