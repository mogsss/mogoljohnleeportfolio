import React, { useState } from "react";
import { Facebook, Instagram, Github, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Message Sent!\nSender: ${name}\nMessage: ${message}`);
    console.log(`Name: `, name, `Message: `, message, `Email:`, email);
  };

  return (
    <div className="bg-slate-950 py-16 px-6 md:px-12 lg:px-24 min-h-screen text-white grid md:grid-cols-2 gap-12 items-center relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="flex justify-center items-center z-10">
        <div className="bg-slate-900/50 backdrop-blur-xl p-10 shadow-2xl rounded-2xl w-full max-w-md border border-slate-800">
          <h2 className="text-4xl font-bold text-left mb-2 text-white tracking-tight">
            Get in touch
          </h2>
          <p className="text-slate-400 mb-8 text-sm">Have a project in mind? Let's build something great.</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 text-white border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-slate-800/50 text-white border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 bg-slate-800/50 text-white border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8 z-10 md:border-l md:border-slate-800 md:pl-20">
        <div>
          <h3 className="text-teal-500 font-mono tracking-widest uppercase text-sm mb-2">Social Connections</h3>
          <h1 className="text-3xl md:text-5xl font-bold text-white">Follow My Socials</h1>
        </div>

        <div className="grid gap-4 w-full max-w-xs">
          <a
            href="https://www.facebook.com/mogstechjohnlee"
            className="flex items-center space-x-4 p-4 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-blue-600/10 hover:border-blue-600/50 transition-all group"
          >
            <Facebook size={24} className="text-slate-400 group-hover:text-blue-500" />
            <span className="font-medium text-slate-300 group-hover:text-white">Facebook</span>
          </a>

          <a
            href="https://instagram.com"
            className="flex items-center space-x-4 p-4 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-pink-600/10 hover:border-pink-600/50 transition-all group"
          >
            <Instagram size={24} className="text-slate-400 group-hover:text-pink-500" />
            <span className="font-medium text-slate-300 group-hover:text-white">Instagram</span>
          </a>

          <a
            href="https://github.com/mogsss"
            className="flex items-center space-x-4 p-4 bg-slate-900/30 border border-slate-800 rounded-2xl hover:bg-slate-700/30 hover:border-slate-500 transition-all group"
          >
            <Github size={24} className="text-slate-400 group-hover:text-white" />
            <span className="font-medium text-slate-300 group-hover:text-white">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}