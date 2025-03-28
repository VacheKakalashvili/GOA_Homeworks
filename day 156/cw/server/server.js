import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PostModel } from "./models/post.models";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.post("/send-post/", async (req, res) => {
    try {
        const post = PostModel
        await post.
    }
})

app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})