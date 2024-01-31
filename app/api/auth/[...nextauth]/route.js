import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
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

export const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        connectDB();
        try {
          const exisitingUser = await User.findOne({ email });
          console.log(exisitingUser);
          const passwordcorrect = await bcrypt.compare(
            password,
            exisitingUser.password
          );

          if (passwordcorrect) {
            return { id: exisitingUser.id, email: exisitingUser.email };
          }
        } catch (error) {
          console.log("error happend", error);
        }

        console.log(credentials);
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
  },
});
export { handler as GET, handler as POST };
