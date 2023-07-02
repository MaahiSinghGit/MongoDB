const bodyParser = require('body-parser');
const express=require('express');

const app=express();
const PORT=5555;

app.use(bodyParser.json());
app.post('/products');
app.get('/products');




app.listen(PORT,()=>{
    console.log(`Server Started at :${PORT}`)
})