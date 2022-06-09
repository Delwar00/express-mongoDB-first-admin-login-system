const express=require('express');
const { adminAllData, adminAddData, adminUpdateData, adminDeleteData, adminSingleData } = require('../controllers/adminController');
const { adminLogin } = require('../controllers/authController');
const router=express.Router();

router.post('/login',adminLogin);
router.get('/',adminAllData);
router.route('/').post(adminAddData);
router.route('/:id').get(adminSingleData).put(adminUpdateData).patch(adminUpdateData).delete(adminDeleteData);


module.exports=router;