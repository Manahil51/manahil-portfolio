"use client";
import { Github, Linkedin, Smartphone, Mail, Code2, Database, Server, X, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constant/projects";
import React, { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  video: string;
  features?: string[];
}

const skills = [
  { name: "Flutter", icon: <Smartphone />, description: "Cross-platform mobile development" },
  { name: "Firebase", icon: <Database />, description: "Backend & real-time database" },
  { name: "Supabase", icon: <Server />, description: "Open source backend" },
  { name: "Dart", icon: <Code2 />, description: "Primary programming language" },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-background text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter">MJ<span className="text-accent">.</span></span>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-sm font-mono text-muted hover:text-accent transition-colors">About</a>
            <a href="#skills" className="text-sm font-mono text-muted hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-mono text-muted hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-mono text-muted hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="min-h-screen flex items-center relative pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" style={{ zIndex: -1 }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" style={{ zIndex: -1 }} />
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <p className="text-sm font-mono text-accent mb-6 tracking-widest">HELLO, I&apos;M</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                MANAHIL<br />JAWED<span className="text-accent">.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-12">
                Full Stack <span className="text-accent font-medium">Mobile App Developer</span>.
                Crafting seamless experiences with Flutter & Firebase.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/manahil-jawed-756769211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="/manahil_resume.pdf"
                  target="_blank"
                  className="border border-accent text-accent px-6 sm:px-8 py-3 rounded-full font-mono text-sm hover:bg-accent hover:text-background transition-all"
                >
                  VIEW RESUME
                </a>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
                  <Image
                    src="/image.png"
                    alt="Manahil Jawed"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-110" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t border-border/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-[0.3em]">00. Technical Stack</h2>
          <p className="text-muted mb-12 md:mb-16 max-w-lg">Technologies I work with to build beautiful and performant mobile applications.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 bg-surface/50 border border-border rounded-2xl hover:border-accent transition-all group cursor-default"
            >
              <span className="text-accent group-hover:scale-110 transition-transform inline-block mb-4">{skill.icon}</span>
              <h3 className="font-bold tracking-tight text-lg mb-2">{skill.name}</h3>
              <p className="text-sm text-muted">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t border-border/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-[0.3em]">01. Selected Projects</h2>
          <p className="text-muted mb-12 md:mb-16 max-w-lg">A collection of mobile applications I&apos;ve designed and developed.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(item as Project)}
              className="group bg-surface border border-border p-6 md:p-8 rounded-3xl hover:border-accent transition-all shadow-xl cursor-pointer"
              style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <Smartphone className="text-accent" size={28} />
                <ExternalLink className="text-muted group-hover:text-accent transition-colors" size={18} />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-muted text-sm mb-6 line-clamp-2 leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tech.slice(0, 3).map(t => (
                  <span key={t} className="text-[10px] font-mono border border-border px-3 py-1 rounded-full uppercase text-accent/80 bg-accent/5">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 md:py-40 border-t border-border/30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-accent mb-8 uppercase tracking-[0.3em]">02. Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">LET&apos;S TALK<span className="text-accent">.</span></h2>
          <p className="text-muted max-w-md mx-auto mb-12">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
          <a
            href="mailto:manahiljawed436@gmail.com"
            className="inline-flex items-center gap-3 bg-accent text-background px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all"
          >
            <Mail size={20} /> SAY HELLO
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Manahil Jawed. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/manahil-jawed-756769211" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-surface border border-border p-6 md:p-8 rounded-3xl max-w-4xl w-full shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold tracking-tight">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                >
                  <X className="text-muted hover:text-accent" size={24} />
                </button>
              </div>

              {selectedProject.video && (
                <div className="aspect-video bg-black rounded-2xl overflow-hidden mb-6">
                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <p className="text-muted mb-6 leading-relaxed">{selectedProject.description}</p>

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-mono text-accent mb-4 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted">
                        <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map(t => (
                  <span key={t} className="text-xs font-mono border border-border px-3 py-1 rounded-full uppercase text-accent bg-accent/5">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
