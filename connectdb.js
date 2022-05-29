import mongoose from 'mongoose';

const connectDB = async (databaseURL)=>{
    try {
        await mongoose.connect(databaseURL);
        console.log("connected successfully..");
    } catch (err) {
        console.log(err);
    }
}
export default connectDB;
