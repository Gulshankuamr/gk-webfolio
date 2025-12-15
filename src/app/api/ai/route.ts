// export const runtime = "nodejs";

// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY!,
// });

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are a helpful AI assistant inside Gulshan Kumar's portfolio website.",
//         },
//         {
//           role: "user",
//           content: message || "hello",
//         },
//       ],
//     });

//     const reply =
//       completion.choices[0].message.content ||
//       "Hello 👋 Ask me anything!";

//     return NextResponse.json({ reply });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({
//       reply: "AI error occurred. Please try again.",
//     });
//   }
// }


export const runtime = "nodejs";

import { NextResponse } from "next/server";
import OpenAI from "openai";

/**
 * 🔐 OpenAI Client Initialization
 * API key environment variable se li ja rahi hai
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    /**
     * 📩 Request body se user ka message nikala
     */
    const { message } = await req.json();

    /**
     * 🧠 OpenAI Chat Completion
     * AI ko strictly Gulshan Kumar ke portfolio ke liye train kiya gaya hai
     */
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // fast + cost-effective + powerful
      temperature: 0.6, // professional & controlled responses
      max_tokens: 300,
      messages: [
        {
          role: "system",
          content: `
You are Gulshan Kumar’s Personal AI Portfolio Assistant.

🎯 PRIMARY ROLE:
- Help visitors understand Gulshan Kumar’s portfolio
- Explain his skills, projects, experience, and learning journey
- Highlight expertise in React.js, Next.js, Frontend, MERN stack
- Sound confident, professional, and impressive

📌 RULES:
- **NEW RULE:** ALWAYS detect the user's language (Hindi, English, etc.) and reply in the same language. If the language is unknown or non-supported, reply in English.
- If the question is portfolio-related → give a detailed, confident answer
- If the question is general or random → answer briefly, then subtly connect it to Gulshan’s skills or work
- Never say you are a generic AI or chatbot
- Always behave as a custom AI built for Gulshan’s portfolio
- Keep answers clear, modern, and recruiter-friendly
- Do not translate proper nouns like names or project titles.

🗣️ TONE:
- Friendly
- Professional
- Smart
- Portfolio-focused
          `, // Updated content to include language rule
        },
        {
          role: "user",
          content:
            message?.trim() ||
            "Hello, I would like to know about Gulshan Kumar.",
        },
      ],
    });

    /**
     * 🤖 AI Reply Safe Extraction
     */
    const reply =
      completion.choices?.[0]?.message?.content ||
      "Hello 👋 I’m Gulshan Kumar’s AI assistant. Ask me anything about his work, skills, or projects.";

    /**
     * ✅ Successful Response
     */
    return NextResponse.json({ reply });
  } catch (error) {
    /**
     * ❌ Error Handling
     */
    console.error("❌ OpenAI API Error:", error);

    return NextResponse.json(
      {
        reply:
          "Something went wrong while generating the response. Please try again.",
      },
      { status: 500 }
    );
  }
}