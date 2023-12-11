import express from 'express';
import mongoose from 'mongoose';
const app = express();

const conString="mongodb+srv://s26s2053:csse3101@systemusers.hcpchwp.mongodb.net/EMS?retryWrites=true&w=majority"
mongoose.connect(conString)
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
});

app.post("/addEmp",async(req,res)=> {
    const Emp = new model({
        empName:req.body.empName,
        empId:req.body.empId,
        password:req.body.password
    })

    await Emp.save()
    res.send('Document saved successfully')

})