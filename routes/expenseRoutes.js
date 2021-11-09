const router = require("express").Router();
const expense = require("../models/expenseModel");

/*read expenses*/
router.route("/").get((req,res)=>{

    expense.find().then((expense)=>{
        res.json(expense)
    }).catch((err)=>{
        res.send(err);
    })
})

/*insert new expense*/
router.route("/add").post((req, res)=>{
    const {date, expenseCategory, description, amount} = req.body;

    const newExpense = new expense({
        date,
        expenseCategory,
        description,
        amount
    })
    newExpense.save(function(err){
        if(!err){
            res.send("sucessfully added a new expense.");
        }else{
            res.send(err);
        }
    })
})

/*update specific expense*/
router.route("/update/:id").put(async (req,res) => {
    let expenseId = req.params.id;
    const {date, expenseCategory, description, amount} =req.body;

    const updateexpense = {
        date,
        expenseCategory,
        description,
        amount
    }

    const update = await expense.findByIdAndUpdate(expenseId,updateexpense)
    .then(() => {
    res.status(200).send({status: "Expense update"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})

/*delete expense*/
router.route("/delete/:id").delete(async (req,res) => {
    let expenseId = req.params.id;

    await expense.findByIdAndDelete(expenseId)
    .then(() => {
        res.status(200).send({status: "Expense delete"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Expense", error: err.message})
    })

})

/*read specific exppense by its id*/
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const exp = await expense.findById(userId)
    .then((expense) => {
        res.status(200).send({status: "Expense fetched", expense});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get expense",error: err.message});
    })
})
module.exports = router;