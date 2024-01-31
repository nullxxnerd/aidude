import { Schema, model, models } from "mongoose";
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
const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
