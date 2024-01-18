import mongoose from "mongoose"

const con=()=>{
    mongoose.connect('mongodb://localhost:27017/aftabnadeem').then(
        console.log('connected successfully')
    )
}
export {con}