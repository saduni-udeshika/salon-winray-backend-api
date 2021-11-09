const router = require("express").Router();

const employeeSalary = require('../models/employeeSalaryModels');



//save salary
router.post('/save',(req,res)=>{

    let newemployeeSalary = new employeeSalary(req.body);
 
    newemployeeSalary.save().then(()=>{
        res.json("Salary infromation Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/add").post((req,res)=>{

    const empID = req.body.empId;
    const empName = req.body.empName;
    const month = req.body.month;
    const salary = req.body.salary;
    const nopay = req.body.nopay;
    const hours = req.body.hours;
    const advance = req.body.advance;
    const amount = req.body.amount;
   
   

    const newemployeeSalary = new employeeSalary({

        empID,
        empName,
        month,
        salary,
        nopay,
        hours,
        advance,
        amount
    })

    newemployeeSalary.save().then(()=>{
        res.json("Salary infromation Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    employeeSalary.find().then((employeeSalary)=>{
        res.json(employeeSalary)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {empID, empName, month, salary, nopay, hours, advance, amount} =req.body;

    const updateemployeeSalary = {
        empID,
        empName,
        month,
        salary,
        nopay,
        hours,
        advance,
        amount
        
    }

    const update= await employeeSalary.findByIdAndUpdate(userId,updateemployeeSalary)
    .then(() => {
    res.status(200).send({status: "salary information is updated"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await employeeSalary.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Salary information is deleted"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message})
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await employeeSalary.findById(userId)
    .then((employeeSalary) => {
        res.status(200).send({status: "salary information is fetched", employeeSalary});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;