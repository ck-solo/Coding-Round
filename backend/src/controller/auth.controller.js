import listModel from "../models/list.models.js"
import jwt from 'jsonwebtoken'

export async function register(req,res){
    const {email, password} = req.body
    const user = await listModel.create({email, password})
}

const token = jwt.sign({
    email:user.email,
    id:user._id
},JWT_SECRET)

res.status(201).json({
    message:"User created successfully",
    token:token
})