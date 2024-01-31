import connectDB from "../database";
import { NextResponse } from "next/server";
import Prompt from "./prompt.js";
export const GET = async () => {
  try {
    connectDB();
    const prompts = await Prompt.find({}).populate("creator", "-password");

    return new NextResponse(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
};
