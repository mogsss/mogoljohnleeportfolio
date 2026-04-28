import React from 'react';
import profileImg from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import Me from '../../components/Me';
import Skill from '../../components/skill'

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-24 bg-slate-950 text-slate-50 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">John Lee Mogol</span>
          </h1>
          
          <h2 className="text-lg md:text-xl font-medium tracking-widest uppercase text-teal-500/80 mt-6 font-mono">
            Web Developer &bull; Freelance Sales Agent
          </h2>
          
          <p className="text-slate-400 mt-6 text-lg leading-relaxed max-w-xl">
            I craft responsive, high-performance digital experiences. Specializing in 
            <span className="text-slate-200"> React Native, Laravel, PHP, MySQL, and Tailwind CSS</span> to help businesses scale in the digital age.
          </p>

          <div className="mt-10">
            <Link
              to="/projects"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white transition-all duration-200 bg-slate-800 rounded-full hover:bg-slate-700 border border-slate-700 hover:border-teal-500/50 shadow-lg"
            >
              View My Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
  <div className="relative">
    {/* Inner Border Ring */}
    <div className="absolute inset-0 rounded-full border-2 border-teal-500/30 transform scale-105"></div>
    
    <img
      src={profileImg}
      alt="John Lee Mogol"
      className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-4 border-slate-800 shadow-xl"
    />
  </div>
</div>
      </section>
      
      <Me />
    </>
  );
}