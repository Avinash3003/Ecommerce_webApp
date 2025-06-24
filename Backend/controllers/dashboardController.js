import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { CartSchema } from '../models/CartSchema.js'

dotenv.config()
const SECRET_KEY=process.env.SECRET_KEY

export const dashboardContoller=async (req,res)=>{

    const token = req.headers.authorization?.split(" ")[1]

    console.log("re",req.headers.authorization?.split(" "))
    console.log("Secretkey: ",SECRET_KEY)
    console.log("token backend: ",token)

    if(!token){
        return res.status(403).json({message: "No token generated"})
    }
    try{
        const decode = jwt.verify(token,SECRET_KEY)
        console.log("Decode text: ",decode)
        
        const userCartData=await CartSchema.findOne({username:decode.email})
        console.log("User Cart data: ",userCartData.cart.length)
        return res.status(200).json({message:"Success",email:decode.email,username:decode.username,cartLength:userCartData.cart.length})
    
    }catch(err){
        res.status(403).json({message:"Invalid token"})
    }

}












