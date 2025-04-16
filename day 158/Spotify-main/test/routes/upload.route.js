import {Router} from "express"
import {getMusic, uploadMusic,} from "../connections/upload.connections.js";


const uploadRouter = Router()

uploadRouter.post('/upload/:filename', uploadMusic)
uploadRouter.get('/music/:filename', getMusic)

export default uploadRouter