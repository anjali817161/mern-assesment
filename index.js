const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')
// const db = require('./config/mongoose.js')
const PORT = 8000
const app = express()
// const routes = require('./routes')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded())



  app.post('/api/addForm', async (req, res) => {
    try {
        console.log("line 22",req.body)
      // Extract data from the request body
      const { username, firstname, lastname, password } = req.body;
  
      // Create a new document using the FormDetail model
      const newFormDetail = new FormDetail({
        username,
        firstname,
        lastname,
        password,
      });
  
      // Save the document to the database
      await newFormDetail.save();
  
      // Send a success response
      return res.status(201).json({ message: 'Form details added successfully' });
    } catch (error) {
      console.error('Error adding form details:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

mongoose.connect('mongodb://localhost:27017/databsessssss', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  
  // Start the Express server after the database connection is established
  app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
  });
});