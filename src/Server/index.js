const express = require('express');
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors());


//Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'myapp'
});

app.post("/home", (req, res) => {

    const uniqueCode = req.body.uniqueCode
    const provinceName = req.body.provinceName
    const schoolName = req.body.schoolName

    db.query(
        "INSERT INTO user (uniqueCode, provinceName, schoolName) VALUES (?, ?, ?)",
        [uniqueCode, provinceName, schoolName],
        (err, result) => {
            console.log(err)
        }
    );
});




app.listen(3001, () => {
    console.log("running server")
});