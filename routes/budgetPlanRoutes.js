const router = require("express").Router();
const budgetPlan = require("../models/budgetPlanModel");

/*read budget plans*/
router.route("/").get((req,res)=>{

    budgetPlan.find().then((budgetPlan)=>{
        res.json(budgetPlan)
    }).catch((err)=>{
        res.send(err);
    })
})

/*insert new budjet plans*/
router.route("/add").post((req, res)=>{
    const {month, description, estimate, actual, balance} = req.body;

    const newBudgetPlan = new budgetPlan({
        month,
        description,
        estimate,
        actual,
        balance
    })
    newBudgetPlan.save(function(err){
        if(!err){
            res.send("sucessfully added a new budget plan.");
        }else{
            res.send(err);
        }
    })
})
/*delete budget plans*/
router.route("/delete/:id").delete(async (req,res) => {
    let budgetPlanId = req.params.id;

    await budgetPlan.findByIdAndDelete(budgetPlanId)
    .then(() => {
        res.send("Budjet Plan deleted");
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Budjet Plan", error: err.message})
    })

})
module.exports = router;