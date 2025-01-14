const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const app = express()

app.use(express.json());


app.listen(3000, () => {
    console.log("Server is running on pordddt 3000");
});

app.get('/', (req, res) => {
    res.send("Hello From NODE API Server updated");
});

app.post('/api/products', async (req, res) => {
  try {
    const Product = await Product.create(req.body);
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});


mongoose.connect('mongodb+srv://mugisha2:Mjhpmjhp2%23@backenddb.4kowb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to the database!');
  })

  .catch(() => {
    console.log("failed to connect to database");
  });
