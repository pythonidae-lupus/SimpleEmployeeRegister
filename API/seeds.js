const mongoose = require('mongoose');
const Employee = require('./Models/employeeSchema');
const mysql = require('mysql');

// mongoose.connect('mongodb://localhost:27017/employeeData',{useNewUrlParser : true} )
//     .then(()=>{
//         console.log("Mongoose connection open!")
//     })
//     .catch(err => {
//         console.log("Oh my! There is an error")
//         console.log(err)
//     })

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

    let sql='CREATE TABLE Employee (id VARCHAR(20), name TEXT, salary INT(11), age INT(11), PRIMARY KEY(id))'
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result)
    })

// const emp = new Employee({
//     id: "nskvefkr",
//     name: "John Doe",
//     salary: 20,
//     age : 32
// })

// emp.save().then(p=>{
//     console.log(p)
// })
//     .catch(e=>{
//         console.log(e)
//     })
// const emps = [
//     {
//         id: "ldnhdhnj",
//         name: "John Wick",
//         salary: 60,
//         age : 51
//     },
//     {
//         id: "hiohoihn",
//         name: "Roger Rabbit",
//         salary: 80,
//         age : 90
//     }
// ]

// Employee.insertMany(emps)
// .then((res)=>{
//     console.log(res);
// })
// .catch(e=>{
//     console.log(e)
// })