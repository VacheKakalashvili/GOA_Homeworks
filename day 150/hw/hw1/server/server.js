import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js"
import cors from "cors"
import { User } from "../client/models/user.model.js"
const PORT = process.env.PORT || 5002

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post("/api", async (req, res) => {
    const body = req.body
    res.status(201).json(body)
    console.log(body)
})
app.listen(PORT, () => {
    connectDB()
    console.log(`server is mining at goa server on port ${PORT}`)
})