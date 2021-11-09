const router = require("express").Router();
let product = require("../models/productModel");

router.route("/add").post((req,res)=>{

    const product_id = req.body.product_id;
    const product_name = req.body.product_name;
    const category_id = req.body.category_id;
    const category_name = req.body.category_name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const newproduct = new product({

        product_id,
        product_name,
        category_id,
        category_name,
        description,
        price,
        quantity
    })

    newproduct.save().then(()=>{
        res.json("Product Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    product.find().then((product)=>{
        res.json(product)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {product_id, product_name, category_id, category_name, description, price, quantity} =req.body;

    const updateproduct = {
        product_id,
        product_name,
        category_id,
        category_name,
        description,
        price,
        quantity
    }

    const update = await product.findByIdAndUpdate(userId,updateproduct)
    .then(() => {
    res.status(200).send({status: "User update"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await product.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User delete"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message})
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await product.findById(userId)
    .then((product) => {
        res.status(200).send({status: "User fetched", product});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;