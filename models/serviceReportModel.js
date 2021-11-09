const mongoose = require('mongoose');


const serviceReportSchema = new mongoose.Schema({

 
    serviceName : {
        type: String,
        //required: true
    },

   price : {
    type: String,
    //required: true
   },
   date: {
    type: Date,
    //required: true
   },
    count :{
        type: String,
       // required: true
    },

    totalPrice : {
        type: String,
        //required: true
    },
    month:{
        type: String
    }
    

}); 

module.exports = mongoose.model("Servicereport", serviceReportSchema)