import React from "react";
import { 
  CircleUser, 
  Airplay, 
  Pin, 
  Code2, 
  Smartphone, 
  Network, 
  Briefcase,
  Database
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-gray-950 to-slate-900 min-h-screen p-6 md:p-12 font-sans">
      
      <div className="text-white px-6 py-12 md:px-16 lg:px-32 bg-gray-900/50 backdrop-blur-md rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.15)] border border-gray-800 mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I’m <span className="text-teal-400 font-mono">John Lee</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I’m a fourth-year{" "}
            <span className="text-white font-semibold">
              Bachelor of Science in Information Technology (BSIT)
            </span>{" "}
            student passionate about web and app development, networking, and continuous technological innovation. 
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Beyond coding, I currently work as a freelance sales agent for one of the biggest telecommunications companies in the Philippines, helping connect communities with reliable fiber internet. I also assist part-time in a local frozen goods store in Victoria. I believe that my background in sales gives me a unique perspective in tech—allowing me to build solutions that truly connect with user needs.
          </p>
        </div>
      </div>

      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl text-white p-8 border border-gray-700 shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center text-teal-400 text-4xl mb-6">
              <CircleUser size={40} />
            </div>
            <h1 className="text-center text-xl font-bold mb-3">Profile</h1>
            <p className="text-center text-gray-400 text-sm leading-relaxed">
              Mogol, John Lee F.<br/>
              A dedicated 4th-year I.T. student bridging the gap between sales and technology.
            </p>
          </div>
          
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl text-white p-8 border border-gray-700 shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center text-blue-400 text-4xl mb-6">
              <Airplay size={40} />
            </div>
            <h1 className="text-center text-xl font-bold mb-3">Education</h1>
            <p className="text-center text-gray-400 text-sm leading-relaxed">
              Currently pursuing my BSIT degree at Pinamalayan Maritime Foundation and Technological College Inc. (PMFTCI).
            </p>
          </div>
          
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl text-white p-8 border border-gray-700 shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center text-indigo-400 text-4xl mb-6">
              <Pin size={40} />
            </div>
            <h1 className="text-center text-xl font-bold mb-3">Location</h1>
            <p className="text-center text-gray-400 text-sm leading-relaxed">
              Based in Matungao, Socorro, Oriental Mindoro, Philippines.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
          <span className="text-teal-400 mr-2">/</span> Tech Stack & Skills
        </h2>
        <div className="flex flex-wrap gap-4">
          {['React Native', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'VS Code', 'Telecom Networking'].map((skill, index) => (
            <span key={index} className="px-5 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-teal-900/30 hover:border-teal-500 hover:text-teal-300 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
          <span className="text-blue-400 mr-2">/</span> What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 flex items-start space-x-4">
            <div className="p-3 bg-blue-900/30 text-blue-400 rounded-lg">
              <Code2 size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building full-stack web applications and management systems using modern frameworks to streamline business processes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 flex items-start space-x-4">
            <div className="p-3 bg-teal-900/30 text-teal-400 rounded-lg">
              <Smartphone size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">App Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating responsive and intuitive mobile applications, ensuring smooth user experiences across different devices.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 flex items-start space-x-4">
            <div className="p-3 bg-purple-900/30 text-purple-400 rounded-lg">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Sales & Client Relations</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connecting clients with the best telecommunications and fiber internet solutions, honing my communication and problem-solving skills.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 flex items-start space-x-4">
            <div className="p-3 bg-indigo-900/30 text-indigo-400 rounded-lg">
              <Network size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">IT Infrastructure</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Passionate about researching and integrating AI-driven innovations into local infrastructure and telecommunications.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}