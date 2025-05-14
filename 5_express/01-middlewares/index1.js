import express from 'express';
const app = express();
const port = 3000;  
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});