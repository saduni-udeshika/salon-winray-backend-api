const router = require("express").Router();
const ledger = require("../models/ledgerModel");

/*read ledger*/
router.route("/").get((req,res)=>{

    ledger.find().then((ledger)=>{
        res.json(ledger)
    }).catch((err)=>{
        res.send(err);
    })
})

/*insert new ledger*/
router.route("/add").post((req, res)=>{
    const {ledgerId, date, note, type, paymentMethod} = req.body;

    const newLedger = new ledger({
        ledgerId, 
        date, 
        note, 
        type, 
        paymentMethod
    })
    newLedger.save(function(err){
        if(!err){
            res.send("sucessfully added a new ledger.");
        }else{
            res.send(err);
        }
    })
})

/*read specific ledger by its id*/
router.route("/get/:id").get(async (req, res) => {
    let ledgerId = req.params.id;
    const ledgerCard = await ledger.findById(ledgerId)
    .then((ledger) => {
        res.status(200).send({status: "Ledger fetched", ledger});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get ledger",error: err.message});
    })
})

/*delete ledgers*/
router.route("/delete/:id").delete(async (req,res) => {
    let ledgerId = req.params.id;

    await ledger.findByIdAndDelete(ledgerId)
    .then(() => {
        res.send("Ledger deleted");
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Budjet Plan", error: err.message})
    })
})

/*update specific ledger*/
router.route("/update/:id").put(async (req,res) => {
    let ledgerId = req.params.id;
    const { date, note, type, paymentMethod} =req.body;

    const updateledger = {
        date, 
        note, 
        type, 
        paymentMethod
    }

    const update = await ledger.findByIdAndUpdate(ledgerId,updateledger)
    .then(() => {
    res.status(200).send({status: "Ledger Note update"})
 }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data"});
 })

})
module.exports = router;