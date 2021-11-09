const router = require("express").Router();
const { addServicereport,viewServicereport,updateServicereport,viewOneServicereport,deleteService} = require('../controllers/servicereportcontroller.js')
 
//add new product
router.post('/add', addServicereport);
//view product
router.get('/', viewServicereport);
//update product
router.put('/update/:id', updateServicereport);
//view one product
router.get('/item/:id', viewOneServicereport);

//delete existing product
router.delete('/delete/:id', deleteService);

module.exports = router;