import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`)
        console.log('Database connected!! DB Host:', connectionInstance.connection.host)

    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    }
}

export default connectDB