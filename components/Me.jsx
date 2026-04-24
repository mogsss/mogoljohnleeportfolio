import React from "react";
import {
  Database,
  Server,
  Smartphone,
  FileCode2,
  Atom,
  Braces
} from "lucide-react";

const skillLevels = [
  { name: "MySQL", level: 80, icon: <Database size={18} /> },
  { name: "Laravel", level: 60, icon: <Server size={18} /> },
  { name: "React Native", level: 70, icon: <Smartphone size={18} /> },
  { name: "PHP", level: 50, icon: <FileCode2 size={18} /> },
  { name: "React", level: 85, icon: <Atom size={18} /> },
  { name: "JavaScript", level: 40, icon: <Braces size={18} /> },
];

const techStack = [
  {
    name: "JavaScript",
    desc: "Modern DOM manipulation, ES6+ functions, and event-driven logic.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "React",
    desc: "Intermediate expertise in building scalable SPAs using hooks and component architecture.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "MySQL",
    desc: "Relational database design, complex queries, and data management.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
  },
  {
    name: "Laravel",
    desc: "Robust backend development using PHP with a focus on MVC architecture.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original-wordmark.svg"
  },
  {
    name: "React Native",
    desc: "Cross-platform mobile development with focus on navigation and state.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "PHP",
    desc: "Solid foundation in server-side scripting and Object-Oriented Programming.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  }
];

export default function Me() {
  return (
    <div className="min-h-screen bg-slate-950 py-24 px-6 md:px-12 lg:px-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-teal-500 font-mono tracking-widest uppercase text-sm mb-4">Expertise & Skills</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h3>
          <div className="h-1 w-20 bg-teal-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {techStack.map((tech, idx) => (
            <div key={idx} className="group bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 hover:border-teal-500/50 transition-all duration-300">
              <img src={tech.img} alt={tech.name} className="w-12 h-12 mb-6 grayscale group-hover:grayscale-0 transition-all" />
              <h4 className="text-xl font-bold text-white mb-3">{tech.name}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>

        {/* Proficiency Section */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h4 className="text-2xl font-bold text-white mb-10 text-center font-mono">Skill Proficiency</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skillLevels.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-teal-500">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-teal-500/80 font-mono text-xs">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="mt-20 text-center">
            <p className="text-slate-500 italic text-lg max-w-2xl mx-auto leading-relaxed">
              "Practice isn't the thing you do once you're good. It's the thing you do that makes you good."
            </p>
            <span className="block mt-4 text-teal-500/60 font-mono text-sm">— Malcolm Gladwell</span>
          </div>
        </div>
      </div>
    </div>
  );
}