const mongoose = require('mongoose');
 
 
const serviceSchema = new mongoose.Schema({ 
    service_id:{
        type:String,
        //unique:true,
        trim:true,
        //required:true
    },
    title:{
        type:String,
        trim:true,
        //required:true
    },
    price:{
        type:Number,
        trim:true,
        //required:true
    },
    duration:{
        type:String,
        //required:true
    },
    content:{
        type:String,
       // required:true
    },
    images:{
        type:String,
        //required:true
    },
    category:{
        type:String,
        //required:true
    },
    /*checked:{
        type:Boolean,
        default:false
    },*/
    appoinmentst:{
        type:Number,
        default: 0
    }
},{
    timestamps:true //important

})
 
module.exports = mongoose.model("service", serviceSchema)