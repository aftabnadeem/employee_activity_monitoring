import mongoose from "mongoose";

const employeetrack=new mongoose.Schema({
    date:{type:String},
    checkin:{type:String},
    checkout:{type:String},
    total:{type:String},
    attendence:{type:String}
})

const employeemodel=mongoose.model('employeetrack',employeetrack)
export {employeemodel}