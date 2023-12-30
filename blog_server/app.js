require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./db/connectDB');
const userRoute = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/user', userRoute);

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('hello world from server');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});