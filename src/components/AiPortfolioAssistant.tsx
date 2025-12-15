"use client";

import { useState, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/* =====================================================
   CONSTANTS
===================================================== */

const INITIAL_MESSAGE =
  "Welcome to Gulshan Kumar’s Portfolio Assistant! Ask me anything in Hindi or English.";

const RANDOM_PLACEHOLDERS = [
  "Ask your own question...",
  "What's Gulshan's best project?",
  "Tell me about his tech stack...",
  "Why should I hire him?",
];

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
    "I’m Gulshan Kumar, a Frontend Developer specializing in React.js and Next.js.",
  "My Tech Stack":
    "React.js, Next.js, JavaScript, Tailwind CSS, Bootstrap, HTML5, CSS3.",
  "My Experience":
    "Frontend Developer Intern at ByteUprise, working on real-world projects.",
  "My Projects":
    "Myntra UI Clone, Weather App, Video Chat App, and AI Portfolio Assistant.",
  "My Skills":
    "Clean UI, responsive design, reusable components, API integration.",
  "Why Hire Me":
    "I write clean code, learn fast, and deliver modern user experiences.",
};

/* =====================================================
   COMPONENT
===================================================== */

export default function AiPortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(INITIAL_MESSAGE);
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(RANDOM_PLACEHOLDERS[0]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const hasWelcomed = useRef(false);

  /* =====================================================
     TEXT → SPEECH (Manual + Language Detect)
  ===================================================== */

  const speak = (text: string, forceLang?: string) => {
    if (!text) return;

    // Toggle stop if already speaking
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const isHindi = /[\u0900-\u097F]/.test(text);
    const lang = forceLang ?? (isHindi ? "hi-IN" : "en-IN");

    window.speechSynthesis.cancel();
    setIsSpeaking(true);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.95;
    utterance.pitch = 1;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  /* =====================================================
     OPEN / CLOSE HANDLING
  ===================================================== */

  useEffect(() => {
    if (open && !hasWelcomed.current) {
      hasWelcomed.current = true;
      setAnswer(INITIAL_MESSAGE);
      speak(INITIAL_MESSAGE);

      setPlaceholder(
        RANDOM_PLACEHOLDERS[Math.floor(Math.random() * RANDOM_PLACEHOLDERS.length)]
      );
    }

    if (!open) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      hasWelcomed.current = false;
      setAnswer(INITIAL_MESSAGE);
      setInput("");
    }
  }, [open]);

  /* =====================================================
     ASK AI (TEXT ONLY)
  ===================================================== */

  const askAI = async (question?: string, shouldSpeak = false) => {
    const finalInput = question || input;
    if (!finalInput.trim() || loading) return;

    setLoading(true);
    setAnswer("");
    setInput("");
    window.speechSynthesis.cancel();

    // Static answers
    if (STATIC_ANSWERS[finalInput]) {
      setAnswer(STATIC_ANSWERS[finalInput]);
      if (shouldSpeak) speak(STATIC_ANSWERS[finalInput]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: finalInput }),
      });

      const data = await res.json();
      setAnswer(data.reply);
      if (shouldSpeak) speak(data.reply);
    } catch {
      setAnswer("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     MIC → SPEECH → TEXT
  ===================================================== */

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.start();
    speak("I am listening, please speak now.", "en-US");

    recognition.onresult = (event: any) => {
      window.speechSynthesis.cancel();
      const spokenText = event.results[0][0].transcript;
      setInput(spokenText);
      askAI(spokenText, true);
    };
  };

  /* =====================================================
     UI
  ===================================================== */

  return (
    <>
      {/* Floating Button */}
      {/* <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-20 w-20 rounded-full bg-indigo-600 shadow-xl flex items-center justify-center hover:scale-105 transition"
      >
        <DotLottieReact
          src="https://lottie.host/e4740e79-5092-4e92-9a3b-9a845942f7c0/6tO808kU5N.lottie"
          loop
          autoplay
          style={{ width: 55, height: 55 }}
        />
      </button> */}

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


      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex justify-center items-end sm:items-center">
          <div className="w-full sm:max-w-2xl bg-zinc-950 border border-indigo-800 rounded-t-3xl sm:rounded-3xl p-6 text-white">

            {/* Header */}
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-indigo-400">
                  🤖 AI Portfolio Assistant
                </h2>
                <p className="text-sm text-gray-400">
                  Built for Gulshan Kumar
                </p>
              </div>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Quick Questions */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => askAI(q)}
                  className="bg-zinc-800 hover:bg-indigo-700/30 text-xs p-3 rounded-xl"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Answer Box */}
            <div className="bg-black/50 border border-indigo-900 rounded-xl p-4 h-48 overflow-y-auto relative">
              {loading ? (
                <div className="text-indigo-400 text-center">Thinking...</div>
              ) : (
                <p className="whitespace-pre-wrap">{answer}</p>
              )}

              {answer !== INITIAL_MESSAGE && (
                <button
                  onClick={() => speak(answer)}
                  className={`absolute bottom-3 right-3 px-3 py-1 text-xs rounded-lg ${
                    isSpeaking ? "bg-red-600" : "bg-indigo-700"
                  }`}
                >
                  {isSpeaking ? "🛑 Stop" : "🔊 Read"}
                </button>
              )}
            </div>

            {/* Input Controls */}
            <div className="flex gap-2 mt-4">
              <textarea
                rows={2}
                placeholder={placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    askAI();
                  }
                }}
                className="flex-1 bg-zinc-900 border border-indigo-700 rounded-xl p-1 text-sm resize-none"
              />

              <button
  onClick={startListening}
  className="h-10 w-14  bg-black flex items-center justify-center rounded-full mt-1"
>
  <img
    src="/assets/AIvoiceeffect.gif"
    alt="AI Voice Effect"
    className="h-15 w-14 object-contain hover:scale-110 transition rounded-full "
  />
</button>


              <button
                onClick={() => askAI()}
                disabled={!input.trim() || loading}
                className="px-2  rounded-xl font-bold bg-indigo-600"
              >
                Ask
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
