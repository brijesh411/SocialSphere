require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get('/' , (req , res) => {
    res.json({msg: "Hello"})

})

const URI = process.env.MONGODB_URL
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port', port);
})