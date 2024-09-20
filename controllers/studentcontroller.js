const Student = require('../models/Student')


async function addstudent(req,res){
    try{
         console.log(req.body)
          let student = new Student(req.body);
          await student.save()
      
         res.end("<h1>data is successfully inserted</h1>")
    }catch(err){
        console.log(err)
    }
}




module.exports={addstudent}