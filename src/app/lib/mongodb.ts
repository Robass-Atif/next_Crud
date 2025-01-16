
import mongoose from "mongoose";
async function connectDb(){


    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(process.env.MONGODB_URI as string);
            console.log("MongoDB Connected");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error;
        }
    }

    console.log("MongoDB already connected");

}

export default connectDb;