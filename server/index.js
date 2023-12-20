import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import model from './Models/User.js';
import empModel from './Models/Emp.js';

const app = express();
app.use(cors());
app.use(express.json());

const conString = "mongodb+srv://s26s2053:csse3101@systemusers.hcpchwp.mongodb.net/EMS?retryWrites=true&w=majority";
mongoose.connect(conString)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.post("/addEmp", async (req, res) => {
    const Emp = new model({
        empName: req.body.empName,
        empId: req.body.empId,
        password: req.body.password
    });

    try {
        await Emp.save();
        res.send('Document saved successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/login", async (req, res) => {
    try {
        const user = await model.findOne({ empId: req.body.empId });
        if (user) {
            if (req.body.password === user.password) {
                res.send('Login successful');
            } else {
                res.status(401).send('Incorrect password');
            }
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});


///fetch all employees by data
// app.get("/fetchEmployee/:empId",async(req,res)=>{
//     try{
//     const id=req.params.empId
//     const employee=await empModel.find({empId:id})
//     res.send({employee})}
//     catch(e){
//         console.log(e)
//     }
// })

app.get("/fetchEmployee",async(req,res)=>{
    try{
        const { empId, firstName, lastName, department ,gender} = req.query;

        let query = {};
        if (empId) query.empId = empId;
        if (firstName) query.firstName = firstName;
        if (lastName) query.lastName = lastName;
        if (department) query.dept = department;
        if(gender) query.gender=gender;

        const employees = await empModel.find(query);

        res.send({ employees });}
    catch(e){
        console.log(e)
    }
})

app.get("/fetchUsers", async (req, res) => {
    try {
        const users = await model.find({});
        res.json({ users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
});

app.delete("/deleteUser/:userId", async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await model.findByIdAndDelete(userId);
        if (result) {
            res.send(`User with ID ${userId} deleted successfully.`);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Error deleting user');
    }
});

app.put("/updateUser/:userId", async (req, res) => {
    const { userId } = req.params;
    const { newPassword } = req.body;

    if (!newPassword) {
        return res.status(400).send('New password is required');
    }

    try {
        const user = await model.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        user.password = newPassword;
        await user.save();

        res.send('Password updated successfully');
    } catch (error) {
        console.error('Error updating user password:', error);
        res.status(500).send('Error updating password');
    }
});
