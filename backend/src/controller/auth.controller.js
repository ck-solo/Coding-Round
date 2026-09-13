import listModel from "../models/list.models"

export async function register(req,res){
    const {email, password} = req.body
    const user = await listModel.create({email, password})
}