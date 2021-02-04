const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser');
const cors = require('cors');
const {nanoid} = require('nanoid');

const Employee = require('./Models/employeeSchema');

const mysql = require('mysql')


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'Employee'
});

db.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log("MySQL connected");
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
//     const employees = await Employee.find({})
        let sql = 'SELECT * FROM Employee'
        let query = db.query(sql, (err, result)=>{
            if (err) throw err;
            // console.log(result)
            res.json(result);
        })
//     res.json(employees)
});

app.post('/', (req, res)=>{
        let emp = {
            id : nanoid(),
            name: req.body.empName,
            salary: req.body.empSalary,
            age: req.body.empAge,
        }
        let sql = "INSERT INTO Employee SET ?"
        let query = db.query(sql, emp, (err, result)=>{
            if(err) throw err;
            console.log(result)
        })
    })

app.listen(PORT, (req, res)=>{
    console.log(`Listening on port ${PORT}`);
})
