import mongoose from "mongoose";
const inactive=new mongoose.Schema({
    date:{type:String},
    inactive_start:{type:String},
    inactive_end:{type:String}
})

const inactive_model=mongoose.model('inactive',inactive)
export default inactive_model