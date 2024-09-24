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
router.get('/students',(req,res)=>{
    controller.getStudents(req,res)
})
router.get('/student/edit/page/:id',(req,res)=>{
    controller.getstudentforEdit(req,res)
})

module.exports = router