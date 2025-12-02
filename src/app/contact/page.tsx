"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import SplashCursor from "../about/SplashCursor";

// ----------------------------
// Validation Schema
// ----------------------------
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);


  // yhi send krne kaa link api laga hai 

  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  // ----------------------------
  // SEND MESSAGE USING Web3Forms
  // ----------------------------
  async function onSubmit() {
    setIsSubmitting(true);

    const formData = new FormData(formRef.current!);
    formData.append("access_key", WEB3FORMS_KEY || "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (json.success) {
        reset();
        alert("Your message has been sent successfully!");
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error("Web3Forms Error:", err);
      alert("Something went wrong.");
    }

    setIsSubmitting(false);
  }

  // ----------------------------
  // WhatsApp Click Handler
  // ----------------------------
  const WHATSAPP_NUMBER = "+917393931450";

  const handleWhatsAppClick = () => {
    const message =
      "Hi Gulshan, I’m contacting you from your portfolio website. I need website services.";

    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  // ----------------------------
  // Social Links
  // ----------------------------
  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/developer_tipss",
      color: "hover:text-pink-500",
      description: "Follow my journey",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/gulshan-kumar-61b446253",
      color: "hover:text-blue-500",
      description: "Professional network",
    },
  ];

  return (
    <section className="bg-black text-white pt-28 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 mr-32">Get in Touch</h2>
          <p className="text-sm text-gray-400">
            Feel free to reach out — messages go to my Gmail and WhatsApp.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="flex gap-5 max-w-4xl w-full">

            {/* LEFT CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full sm:w-80"
            >
              <div className="bg-zinc-950 border border-zinc-900 rounded-md p-6 h-full flex flex-col">

                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Let's Connect</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Ready to start your project? Reach out via WhatsApp or send a message.
                </p>

                {/* WHATSAPP */}
                <div className="mb-6">
                  <div
                    onClick={handleWhatsAppClick}
                    className="flex items-center space-x-3 p-3 bg-[#0f0f0f] rounded-md hover:bg-[#2a2a2a] cursor-pointer group"
                  >
                    <FaWhatsapp className="text-green-500 text-lg" />
                    <div>
                      <p className="font-medium text-white text-sm">WhatsApp</p>
                      <p className="text-gray-400 text-xs">{WHATSAPP_NUMBER}</p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div
                    onClick={() => window.open(`tel:${WHATSAPP_NUMBER}`, "_self")}
                    className="flex items-center space-x-3 p-3 mt-3 bg-[#0f0f0f] rounded-md hover:bg-[#2a2a2a] cursor-pointer group"
                  >
                    <FaPhone className="text-green-500 text-lg" />
                    <div>
                      <p className="font-medium text-white text-sm">Call</p>
                      <p className="text-gray-400 text-xs">{WHATSAPP_NUMBER}</p>
                    </div>
                  </div>
                </div>

                {/* SOCIAL LINKS FIXED */}
                <h4 className="text-gray-200 mb-3">Follow Me</h4>

                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <div key={social.name} className="mb-3">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-[#0f0f0f] rounded-md hover:bg-[#2a2a2a] group"
                      >
                        <Icon className={`text-lg text-gray-400 ${social.color}`} />

                        <div>
                          <p className="text-white text-sm">{social.name}</p>
                          <p className="text-gray-400 text-xs">{social.description}</p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full sm:w-96">
              <div className="bg-[#1a1a1a] border border-gray-700 rounded-md p-6 h-full flex flex-col">
                
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Send a Message</h3>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 flex flex-col flex-1"
                >
                  {/* Name */}
                  <div>
                    <label className="text-sm">Name</label>
                    <input
                      {...register("name")}
                      className="w-full p-3 bg-[#0f0f0f] border border-gray-700 rounded-md text-white"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm">Email</label>
                    <input
                      {...register("email")}
                      className="w-full p-3 bg-[#0f0f0f] border border-gray-700 rounded-md text-white"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="flex-1">
                    <label className="text-sm">Message</label>
                    <textarea
                      {...register("message")}
                      className="w-full p-3 min-h-[120px] bg-[#0f0f0f] border border-gray-700 rounded-md text-white"
                      placeholder="Write your message..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-sm">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-yellow-400 text-black py-3 rounded-md font-bold disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <SplashCursor />
    </section>
  );
}
