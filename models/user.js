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
      minlength: [6, "Password should be at least 6 characters long"],
      maxlength: [20, "Password should be at most 20 characters long"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const User = models.User || models("User", UserSchema);

export default User;
