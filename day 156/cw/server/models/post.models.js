import mongoose from "mongoose";

const postSchema = new mongoose.schema({
    title: String,
    comments: String,
    author: String,
    img: String,
},
    { Timestamp: true, }
)
export const PostModel = mongoose.model("posts", postSchema)