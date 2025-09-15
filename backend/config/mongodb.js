import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connection established successfully");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/Login`);
};

export default connectDB;
