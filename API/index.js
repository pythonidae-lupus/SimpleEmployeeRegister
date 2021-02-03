const express = require('express');
const empData = require('./Employees');
const app = express();
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser');
const cors = require('cors');
const {nanoid} = require('nanoid');
const mongoose = require('mongoose');
const Employee = require('./Models/employeeSchema');

mongoose.connect('mongodb://localhost:27017/employeeData',{useNewUrlParser : true} )
    .then(()=>{
        console.log("Mongoose connection open!")
    })
    .catch(err => {
        console.log("Oh my! There is an error")
        console.log(err)
    })

app.use(cors());
app.use(bodyParser.json());

app.get('/', async (req, res)=>{
    const employees = await Employee.find({})

    res.json(employees)
});

app.post('/', async (req, res)=>{
    console.log(req.body);
    // empData.push({
    //     id: nanoid(),
    //     name: req.body.empName,
    //     salary: req.body.empSalary,
    //     age: req.body.empAge,
    // })
    const newEmp = new Employee({
            id: nanoid(),
            name: req.body.empName,
            salary: req.body.empSalary,
            age: req.body.empAge,
        })
    await newEmp.save();
    // db.employee.insertOne
})    

app.listen(PORT, (req, res)=>{
    console.log(`Listening on port ${PORT}`)
})

// .map(employee=>{
//     {   empName : employee.name, 
//         empSalary : employee.salary, 
//         empAge: employee.age
//     }