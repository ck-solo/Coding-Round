import express from "express"
import { getme, register } from "../controller/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/register",register)
authRouter.get("/getme", getme)

export default authRouter