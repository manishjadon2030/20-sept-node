const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentcontroller')
router.use(express.urlencoded({extended:false}));


router.get('/',(req,res)=>{
    res.render('home')
})
router.post('/add/student',(req,res)=>{
    controller.addstudent(req,res)
})

module.exports = router