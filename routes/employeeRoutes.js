const router = require("express").Router();

let employee = require("../models/employeeModels");

router.route("/add").post((req,res)=>{

    const empId = req.body.empId;
    const nic = req.body.nic;
    const empName = req.body.empName;
    const age = req.body.age;
    const contactNumber = req.body.contactNumber;
    const gender = req.body.gender;
    const jobTitle = req.body.jobTitle;
    const email = req.body.email;
    

    const newemployee = new employee({

        empId,
        nic,
        empName,
        age,
        contactNumber,
        gender,
        jobTitle,
        email,
        
    })

    newemployee.save().then(()=>{
        res.json("employee Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    employee.find().then((employee)=>{
        res.json(employee)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {empId, nic, empName, age, contactNumber, gender, jobTitle, email} =req.body;

    const updateemployee = {
        empId,
        nic,
        empName,
        age,
        contactNumber,
        gender,
        jobTitle,
        email,
        
    }

    const update = await employee.findByIdAndUpdate(userId,updateemployee)
    .then(() => {
    res.status(200).send({status: "User update"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await employee.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User delete"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message})
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await employee.findById(userId)
    .then((employee) => {
        res.status(200).send({status: "User fetched", employee});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;