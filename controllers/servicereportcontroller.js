const Service = require("../models/serviceReportModel");
//add new service
exports.addServicereport = async (req, res) => {
 
    //constant variables for the attributes
    const {serviceName, price,date,count,totalPrice,month} = req.body;
   
    //object
    const newServicereport= new Service({
      //initializing properties
      serviceName,
      price,
      date,
      count,
      totalPrice,
      month
    })
   
    //saving the object to the db 
    newServicereport.save().then(() => {
      res.status(200).json({ status: "New onr Added" });
    }).catch((error) => {
      res.status(500).json({message:"Fail to Add Item",error:error.message})
    })
  }

  
//view 
exports.viewServicereport= async (req, res) => { 
 
    //calling Service model
    Service.find().then((serviceReport) => {
      res.status(200).json(serviceReport)
    }).catch((error) => {
      res.status(500).json({ message: "Error with fetching", error: error.message });
    })
  }

  //update 
exports.updateServicereport= async (req, res) => { 
  //fetch id from url
  let reportid = req.params.id;
 
  const {serviceName, price,date, count,totalPrice,month} = req.body;
 
  const updateServicereport = {

    serviceName,
    price,
    date,
    count,
    totalPrice,
    month
  }

  //check whether there's for the ID
  try {
    await Service.findByIdAndUpdate(reportid, updateServicereport);

    //sending the successful status
    res.status(200).json({ success: true, message: "Updated" })
  } catch (error) {
    res.status(500).json({ message: "Error with Updating", error: error.message });
  }
}
//view one
exports.viewOneServicereport = async (req, res) => {
  let reportid = req.params.id;

  await Service.findById(reportid).then((serviceReport) => {
    res.status(200).json({ status: "Service fetched", serviceReport });
  }).catch((error) => {
    res.status(500).json({ status: "Error with fetching", error: error.message });
  })
}
//delete existing one
exports.deleteService = async (req, res) => {
  let serviceId = req.params.id;
 
  await Service.findByIdAndDelete(serviceId).then(() => {
    res.status(200).json({ status: "Service Deleted" });
  }).catch((error) => {
    res.status(500).json({ status: "Error with Deleting", error: error.message });
  })
}