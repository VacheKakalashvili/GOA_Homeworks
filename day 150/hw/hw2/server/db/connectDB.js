import mongoose, {mongo} from 'mongoose'

export default async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB is mining at goa server on ${conn.connection.host}`)
    } catch {
        console.log(MongoDB)
    }
}
