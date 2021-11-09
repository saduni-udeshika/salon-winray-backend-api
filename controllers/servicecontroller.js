const Service = require("../models/serviceModel");

//add new service
exports.addService = async (req, res) => {
 
  //constant variables for the attributes
  const {service_id,title, price,duration,content,category} = req.body;
 
  //object
  const newService= new Service({
    //initializing properties
    service_id,
    title,
    price,
    duration,
    content,
    category
  })
 
  //saving the object to the db 
  newService.save().then(() => {
    res.status(200).json({ status: "New Service Added" });
  }).catch((error) => {
    res.status(500).json({message:"Fail to Add Item",error:error.message})
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
 
//update 
exports.updateService= async (req, res) => { 
  //fetch id from url
  let serviceId = req.params.id;
 
  const {title, price,duration, content,category} = req.body;
 
  const updateService = {

    title,
    price,
    duration,
    content,
    category
  }

  //check whether there's for the ID
  try {
    await Service.findByIdAndUpdate(serviceId, updateService);

    //sending the successful status
    res.status(200).json({ success: true, message: "Updated" })
  } catch (error) {
    res.status(500).json({ message: "Error with Updating", error: error.message });
  }
}

//view 
exports.viewService= async (req, res) => { 
 
  //calling Service model
  Service.find().then((service) => {
    res.status(200).json(service)
  }).catch((error) => {
    res.status(500).json({ message: "Error with fetching", error: error.message });
  })
}
 
//view one
exports.viewOneService = async (req, res) => {
  let serviceId = req.params.id;

  await Service.findById(serviceId).then((service) => {
    res.status(200).json({ status: "Service fetched", service });
  }).catch((error) => {
    res.status(500).json({ status: "Error with fetching", error: error.message });
  })
}