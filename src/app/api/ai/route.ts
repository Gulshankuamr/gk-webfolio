export const runtime = "nodejs";

import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI assistant inside Gulshan Kumar's portfolio website.",
        },
        {
          role: "user",
          content: message || "hello",
        },
      ],
    });

    const reply =
      completion.choices[0].message.content ||
      "Hello 👋 Ask me anything!";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      reply: "AI error occurred. Please try again.",
    });
  }
}
