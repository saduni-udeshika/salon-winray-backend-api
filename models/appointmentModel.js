const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointment = new Schema({

appointment_id : {
    type : String,
},
customer_name : {
    type : String,
    required: true
},
service_type : {
    type : String,
    required: true
},
appointment_date : {
    type : String,
    required: true
},
appointment_time : {
    type : String,
    required: true
},
phone : {
    type : Number,
    required: true
}

})

const Appointment = mongoose.model("Appointment",appointment);

module.exports = Appointment;