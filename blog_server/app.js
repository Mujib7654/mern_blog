const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send(`Hello World from port number ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});