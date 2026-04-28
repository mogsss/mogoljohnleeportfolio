import React from "react";
import { Github, ExternalLink } from "lucide-react";
import midtermImg from '../assets/midterm.png';
import mogstaskImg from '../assets/mogstask.png';
import orderingImg from '../assets/orderingsystem.png';
import portfolioImg from '../assets/portfolio.png';

export default function Projects() {
  const projects = [
    { 
      src: midtermImg, 
      title: "Midterm Project", 
      description: "A comprehensive project demonstrating core web development skills and basic backend logic.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/mogsss",
      live: "#"
    },
    { 
      src: mogstaskImg, 
      title: "MogsTask App", 
      description: "A mobile productivity app designed for managing daily tasks and schedules efficiently.",
      tech: ["React Native", "JavaScript"],
      github: "https://github.com/mogsss",
      live: "#"
    },
    { 
      src: orderingImg, 
      title: "Ordering System", 
      description: "A streamlined ordering management system tailored for small business operations.",
      tech: ["Laravel", "Tailwind CSS"],
      github: "https://github.com/mogsss",
      live: "#"
    },
    { 
      src: portfolioImg, 
      title: "My Portfolio", 
      description: "A personal portfolio website showcasing my work, skills, and professional journey.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/mogsss",
      live: "#"
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-950 to-slate-900 py-20 px-6 md:px-12 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Recent <span className="text-teal-400">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Here are some of the projects I have worked on recently. Each project helped me learn new frameworks and improve my problem-solving abilities as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(45,212,191,0.15)] hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video border-b border-gray-700">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-2 bg-gray-800 rounded-full text-white hover:text-teal-400 hover:bg-gray-700 transition-colors" title="View Source">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="p-2 bg-gray-800 rounded-full text-white hover:text-teal-400 hover:bg-gray-700 transition-colors" title="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs font-medium px-2.5 py-1 bg-gray-900 text-teal-300 border border-gray-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}