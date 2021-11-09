const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    product_id : {
        type : String,
        
    },
    product_name : {
        type: String,
        required: true
    },
    category_id : {
        type: String,
        required: true
    },
    category_name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    },
    quantity : {
        type: String,
        required: true
    }
    

}); 

const product = mongoose.model("product",productSchema);

module.exports = product;