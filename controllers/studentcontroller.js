const Student = require('../models/Student')


async function addstudent(req,res){
    try{
         console.log(req.body)
          let student = new Student(req.body);
          await student.save()
      
         res.render('studentadd')
    }catch(err){
        console.log(err)
    }
}

async function getStudents(req,res) {

    try{
          let students = await Student.find({});
          console.log(students)
          res.render('studentdetails',{
            students : students
          })
    }catch(err){
        console.log(err)
    }
    
}
async function getstudentforEdit(req,res){
      try{
        
      }
}




module.exports={addstudent,getStudents,getstudentforEdit}