const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id:{
        type: String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    age : {
        type: Number,
        required: true
    }
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee;