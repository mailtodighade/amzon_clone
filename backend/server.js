const express = require('express');
const cors  = require('cors')
const app = express();
const PORT = 5000;
const products = require('./data/products');



app.use(cors())
//routes...
app.get('/', (req, res) =>{
    res.status(200).json({message: 'hello there!', data: null})
})

app.get('/api/v1/products', (req, res) =>{
    res.status(200).json({message: 'fetched data successfully!', data: products})
})

app.listen(PORT, () =>{
    console.log(`server is listening to port ${PORT}`)
})