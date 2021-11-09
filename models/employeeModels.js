const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    empId : {
        type : String,
       
    },

    nic : {
        type: String,
        required: true
    },

    empName : {
        type: String,
        required: true
    },
    age : {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

    jobTitle : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
    

}); 

const employee = mongoose.model("employee",employeeSchema);

module.exports = employee;