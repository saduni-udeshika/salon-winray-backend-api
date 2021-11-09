const router = require("express").Router();

const attendence = require('../models/empAtModels');



//save attendence record
router.post('/save',(req,res)=>{

    let newattendence = new attendence(req.body);
 
    newattendence.save().then(()=>{
        res.json("Attendence Record is added.")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/add").post((req,res)=>{

    const empID = req.body.empID;
    const empName = req.body.empName;
    const date = req.body.date;
    const timeIn = req.body.timeIn;
    const timeOut = req.body.timeOut;
    const totalHours = req.body.totalHours;

   
   

    const newattendence  = new attendence({

        empID,
        empName,
        date,
        timeIn,
        timeOut,
        totalHours,
    })

    newattendence.save().then(()=>{
        res.json("Attendence Record is Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    attendence.find().then((attendence)=>{
        res.json( attendence)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {empID, empName, date, timeIn, timeOut, totalHours} =req.body;

    const updateattendence = {
        empID,
        empName,
        date,
        timeIn,
        timeOut,
        totalHours,
        
    }

    const update= await attendence.findByIdAndUpdate(userId,updateattendence)
    .then(() => {
    res.status(200).send({status: "Employee Attendence Information is updated"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await attendence.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: " Employee Attendence information is deleted"});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message})
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await attendence.findById(userId)
    .then((attendence) => {
        res.status(200).send({status: "salary information is fetched", attendence});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;