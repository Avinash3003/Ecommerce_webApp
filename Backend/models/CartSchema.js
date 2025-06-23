import mongoose from "mongoose"


const userSchema = mongoose.Schema({
    ref_id:{type:Number,require:true},
    cnt:{type:Number,require:true},
});


const cartdata=mongoose.Schema({
    username:{type:String,require:true},
    cart: [userSchema]
})

export const CartSchema=mongoose.model("CartSchema",cartdata)