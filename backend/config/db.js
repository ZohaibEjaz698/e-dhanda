import mongoose from "mongoose";
const connectDB = async () => {
     
    mongoose.connection.on('connected', () => {
        console.log('Mongoose is connected');
    })


    await mongoose.connect(`${process.env.MONGO_URI || `mongodb+srv://edhanda123:5bLazhreg1KqO2wl@cluster0.8tivl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
`}/edhanda`)
}

export default connectDB;