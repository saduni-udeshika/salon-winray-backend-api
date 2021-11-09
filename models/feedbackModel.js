const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedback = new Schema({

    feedback_id : {
        type : String,
        
    },
     customer_name : {
        type : String,
     },  
      
    service_type : {
        type : String,
        
    },
    rating : {
        type : Number,
        
    },
    feedback_description : {
        type : String,
        
    } 

})

const Feedback = mongoose.model("Feedback",feedback);

module.exports = Feedback;