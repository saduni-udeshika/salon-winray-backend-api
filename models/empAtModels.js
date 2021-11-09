const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendenceSchema = new Schema({

    empID : {
        type : String,
       
    },
    
    empName : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },



    timeIn : {
        type: String,
        required: true
    },
    timeOut: {
        type: String,
        required: true
    },
    totalHours: {
        type: String,
        required: true
    }
    

}); 

const attendence = mongoose.model("attendence",attendenceSchema);

module.exports = attendence;