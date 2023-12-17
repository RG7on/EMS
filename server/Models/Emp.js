import mongoose from "mongoose";
const empSchema=new mongoose.Schema({
    empId:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String,required:true},
    position:{type:String,required:true},
    dept:{type:String,required:true},
    contact:{
        email:{type:String,required:true},
        phone:{type:String,required:true}
    },
    address:{type:String,required:true},
    hireDate:{type:String,required:true},
    emergencyNumber:{type:String,required:false}
})

const empModel=mongoose.model("employees",empSchema);
export default empModel;