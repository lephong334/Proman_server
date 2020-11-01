const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//test
app.get('/test', (req, res) => {
    console.log('Test');
    res.send('Hello World');
})

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ', process.env.PORT);
});
