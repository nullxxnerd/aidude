import connectDB from "../../database";
import { NextResponse } from "next/server";
import Prompt from "../prompt.js";

export const POST = async (request) => {
  const { userId, prompt, tag } = await request.json();

  try {
    await connectDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    await newPrompt.save();
    return new NextResponse(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to create a new prompt", { status: 500 });
  }
};
