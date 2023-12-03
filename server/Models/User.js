import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    empId:{type:String,required:true},
    password:{type:String,required:true}
});

const model = mongoose.model("User",UserSchema);
export default model;