const router = require("express").Router();
const { addService, deleteService, updateService, viewService, viewOneService} = require('../controllers/servicecontroller.js')
 
//add new product
router.post('/add', addService);
 
//delete existing product
router.delete('/delete/:id', deleteService);
 
//update product
router.put('/update/:id', updateService);
 
//view product
router.get('/', viewService);
 
//view one product
router.get('/item/:id', viewOneService);
 
module.exports = router;