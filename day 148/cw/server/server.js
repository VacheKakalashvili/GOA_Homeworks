import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./db/connectDB.js"

dotenv.config()
const app = express()
app.use(cors())

const USER = {
    name: "vache",
    lastname: "kakalashvili",
    age: 14,
    email: "fakemail@gmail.com"
}

app.get("/user", (req, res) => {
    try {
        res.status(200).json(USER)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`server is chilling on port http://localhost:${process.env.PORT}`)
    connectDB()
})