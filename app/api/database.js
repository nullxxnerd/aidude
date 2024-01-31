import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection[0]?.readyState === 1) {
    console.log("Database is already connected");
    return;
  }
  try {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGOSEE CONNECTEDDDD");
  } catch (error) {
    console.log(
      "Database connection failed fucking hell",
      error,
      "end of error"
    );
  }
};
export default connectDB;
