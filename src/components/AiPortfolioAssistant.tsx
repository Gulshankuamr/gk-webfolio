"use client";

import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const QUICK_QUESTIONS = [
  "My Introduction",
  "My Tech Stack",
  "My Experience",
  "My Projects",
  "My Skills",
  "Why Hire Me",
];

const STATIC_ANSWERS: Record<string, string> = {
  "My Introduction":
    "I’m Gulshan Kumar, a Frontend Developer specializing in React.js and Next.js. I build modern, responsive, and scalable web applications.",

  "My Tech Stack":
    "React.js, Next.js, JavaScript (ES6+), Tailwind CSS, Bootstrap, HTML5, CSS3.",

  "My Experience":
    "Frontend Developer Intern at ByteUprise, working on real-world React projects with API integration and responsive UI.",

  "My Projects":
    "Myntra UI Clone, Weather App with real-time API, and a Video Chat Application.",

  "My Skills":
    "Clean UI development, responsive design, reusable components, API integration, and performance optimization.",

  "Why Hire Me":
    "I write clean code, learn fast, and deliver modern, user-friendly interfaces with strong attention to detail.",
};

export default function AiPortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔊 Text → Speech
  const speak = (text: string) => {
    if (!text) return;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  // 🤖 Ask AI / Static
  const askAI = async (question?: string) => {
    const finalInput = question || input;
    if (!finalInput.trim() || loading) return;

    setInput(finalInput);
    setAnswer("");
    setLoading(true);

    // ✅ STATIC ANSWER CHECK
    if (STATIC_ANSWERS[finalInput]) {
      setAnswer(STATIC_ANSWERS[finalInput]);
      speak(STATIC_ANSWERS[finalInput]);
      setLoading(false);
      return;
    }

    // 🔁 FALLBACK → OPENAI
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: finalInput }),
      });

      const data = await res.json();
      setAnswer(data.reply);
      speak(data.reply);
    } catch {
      setAnswer("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-20 w-20 rounded-full bg-black shadow-xl flex items-center justify-center hover:scale-105 transition"
      >
        <DotLottieReact
          src="https://lottie.host/6310f416-6b33-4d0f-9662-e5d135106a73/OHTAobf766.lottie"
          loop
          autoplay
          style={{ width: 50, height: 50 }}
        />
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur flex justify-center items-end sm:items-center">
          <div className="w-full sm:max-w-2xl bg-zinc-950 border border-zinc-800 rounded-t-3xl sm:rounded-3xl p-4 text-white animate-slideUp">

            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-xl font-bold">AI Assistant</h2>
                <p className="text-xs text-gray-400">
                  Learn more about Gulshan Kumar
                </p>
              </div>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Quick Questions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => askAI(q)}
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs p-3 rounded-lg transition"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Answer */}
            <div className="bg-black border border-zinc-800 rounded-lg p-3 h-40 overflow-y-auto text-sm">
              {loading ? "Thinking..." : answer}
            </div>

            {/* Input */}
            <div className="flex gap-2 mt-3">
              <textarea
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-sm"
                rows={2}
                placeholder="Ask your own question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={() => askAI()}
                className="bg-white text-black px-4 rounded-lg font-semibold"
              >
                Ask
              </button>
            </div>

          </div>
        </div>
      )}

      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
