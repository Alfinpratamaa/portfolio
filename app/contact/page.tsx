"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | evrea",
  description:
    "Contact me via email to start a conversation or ask me anything",
  keywords: [
    "Contact",
    "Portfolio",
    "Developer Portflio",
    "Muhamad Alfin Pratama",
    "Next.js",
    "React",
    "ReactNative",
    "Android",
    "nodejs",
    "alfin",
    "alfin pratama",
    "muhamad alfin",
    "muhamad alfin pratama",
    "muhammad alfin pratama",
    "frontend web",
    "Frontend Developer",
    "Front-end Developer",
    "Front End Developer",
    "Frontend Engineer",
    "Front-end Engineer",
    "Front End Engineer",
    "Muhamad Alfin",
    "Alfin Pratama",
    "Muhamad",
    "Alfin",
    "Pratama",
    "evrea",
  ],
};

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();
      setStatus(data.message);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Error sending email");
    } finally {
      // Reset form state (optional)
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center py-24  px-20">
      <div className="w-full max-w-6xl">
        <motion.div
          className="bg-neutral-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-neutral-700/50 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Contact Info */}
            <motion.div
              className="p-8 lg:p-12 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-full flex flex-col justify-center">
                <h1 className="text-4xl lg:text-5xl text-white font-extrabold tracking-tight mb-4">
                  Get in touch
                </h1>
                <p className="text-lg lg:text-xl font-medium text-gray-300 mb-8">
                  Fill in the form to start a conversation
                </p>

                <div className="space-y-6">
                  <div className="flex items-center text-gray-300">
                    <div className="w-12 h-12 bg-neutral-700/50 rounded-full flex items-center justify-center mr-4">
                      <FaMapMarkerAlt className="w-5 h-5 text-purple-400" />
                    </div>
                    <p className="text-base font-medium">
                      Bandung City, West Java, Indonesia
                    </p>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <div className="w-12 h-12 bg-neutral-700/50 rounded-full flex items-center justify-center mr-4">
                      <FaPhoneAlt className="w-5 h-5 text-purple-400" />
                    </div>
                    <p className="text-base font-medium">+62 851 7536 9960</p>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <div className="w-12 h-12 bg-neutral-700/50 rounded-full flex items-center justify-center mr-4">
                      <FaEnvelope className="w-5 h-5 text-purple-400" />
                    </div>
                    <p className="text-base font-medium">
                      muhamadalfinpratamaa@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Contact Form */}
            <motion.div
              className="p-8 lg:p-12"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full py-3 px-4 rounded-lg bg-neutral-700/50 border border-neutral-600 text-white placeholder-gray-400 font-medium focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 px-4 rounded-lg bg-neutral-700/50 border border-neutral-600 text-white placeholder-gray-400 font-medium focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    placeholder="Enter email subject"
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full py-3 px-4 rounded-lg bg-neutral-700/50 border border-neutral-600 text-white placeholder-gray-400 font-medium focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    placeholder="Enter your message"
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full py-3 px-4 rounded-lg bg-neutral-700/50 border border-neutral-600 text-white placeholder-gray-400 font-medium focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "Sending..."}
                >
                  {status || "Send Message"}
                </motion.button>

                {status && status !== "Sending..." && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-center text-sm font-medium ${
                      status.includes("Error")
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
export default ContactPage;
