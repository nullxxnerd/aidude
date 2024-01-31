import connectDB from "../../database";
import { NextResponse } from "next/server";
import Prompt from "../prompt.js";
import { connect } from "mongoose";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new NextResponse("Prompt Not Found", { status: 404 });

    return new NextResponse(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectDB();

    // Find the existing prompt by ID
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new NextResponse("Prompt not found", { status: 404 });
    }

    // Update the prompt with new data
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new NextResponse("Successfully updated the Prompts", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    // Find the prompt by ID and remove it
    await Prompt.findByIdAndRemove(params.id);

    return new NextResponse("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Error deleting prompt", { status: 500 });
  }
};
