const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSalarySchema = new Schema({

    
    empName : {
        //data type of the attribute
        type : String,
        //there should be a value to the name attribute in order to put inside database
        required : true, //backend validation
    },

    empID : {
        type : String,
       
    },

    month : {
        type : String,
        required : true
    },

    salary : {
        type : String,
        required: true
    },

    nopay : {
        type : String,
        required: true
    },
    hours : {
        type : String
    },
    advance : {
        type : String,
        required: true
    },
    amount : {
        type : String,
        required: true
    }
    

}); 

const employeeSalary = mongoose.model("employeeSalary",employeeSalarySchema);

module.exports = employeeSalary;