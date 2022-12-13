const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const data = require('./data.json');

const PORT = 3001;                 
 
app.use(express.static('public')); 
app.use('/images', cors(),  express.static('images'));
app.use(cors());


app.get('/images',  (req, res) => {
    res.send(data)
  })

app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
})