import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import model from './Models/User.js';

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
            // Check if the password matches
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
