import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection[0].readyState === 1) {
    console.log("Database is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("MONGOSEE CONNECTEDDDD");
  } catch (error) {
    throw new Error("Database connection failed");
  }
};
export default connectDB;
