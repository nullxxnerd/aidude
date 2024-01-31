import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import mongoose from "mongoose";

import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is Required"],
    },
    username: {
      type: String,
      required: [true, "Username is Required"],
      match: [
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
      ],
    },
    password: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

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

export async function GET() {
  const data = {
    name: "some get function test",
    age: "27",
  };

  return NextResponse.json({ data });
}

export const POST = async (request) => {
  const { email, password, username } = await request.json();
  console.log("request is fine");
  await connectDB();
  const exisitingUser = await User.findOne({ email });
  if (exisitingUser) {
    return new NextResponse("User already exists", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await new User({ email, username, password: hashedPassword });
  try {
    await newUser.save();
    return new NextResponse("User created successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
};
