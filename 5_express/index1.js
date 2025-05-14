import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});
app.post('/register', (req, res) => {
    res.sendStatus(201);
});
app.put("/user/angela",(req,res)=>{
    res.sendStatus(2000);
})
app.delete("/user/angela",(req,res)=>{
    res.sendStatus(2000);
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});