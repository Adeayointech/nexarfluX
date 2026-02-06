'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'AI Humanizer',
      description: 'Advanced AI-powered text humanization platform built with Next.js 15, featuring OpenAI integration, user authentication, and PDF processing capabilities.',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'OpenAI', 'NextAuth'],
      category: 'web',
      gradient: 'from-blue-500 to-cyan-500',
      githubUrl: 'https://github.com/Adeayointech/ai-humanizer',
      liveUrl: null,
      inProgress: false,
    },
    {
      title: 'Law Firm Platform',
      description: 'Comprehensive case management system with role-based access control, document versioning, deadline tracking, and multi-branch support for law firms.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'JWT'],
      category: 'web',
      gradient: 'from-purple-500 to-pink-500',
      githubUrl: null,
      liveUrl: null,
      inProgress: true,
    },
    {
      title: 'Aidy Mobile App',
      description: 'Cross-platform mobile application built with React Native, featuring Firebase authentication and seamless iOS/Android deployment.',
      tags: ['React Native', 'TypeScript', 'Firebase', 'Mobile'],
      category: 'mobile',
      gradient: 'from-green-500 to-emerald-500',
      githubUrl: null,
      liveUrl: null,
      inProgress: true,
    },
    {
      title: 'Care Workers LMS',
      description: 'Professional learning management system for care workers with role-based access, progress tracking, quiz system, and assessor feedback.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'cPanel'],
      category: 'web',
      gradient: 'from-orange-500 to-red-500',
      githubUrl: 'https://github.com/Adeayointech/care-workers-lms',
      liveUrl: null,
      inProgress: false,
    },
    {
      title: 'Event Ticketing System',
      description: 'Full-stack event management and ticketing platform with QR code generation, payment processing, and organizer dashboard.',
      tags: ['React', 'PHP', 'MySQL', 'REST API', 'JWT'],
      category: 'web',
      gradient: 'from-indigo-500 to-purple-500',
      githubUrl: 'https://github.com/Adeayointech/ticketing-software',
      liveUrl: null,
      inProgress: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-primary-400">Projects</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my expertise across different technologies and domains.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.inProgress ? (
                      <span className="flex items-center gap-2 text-amber-400 font-medium">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">In Progress</span>
                      </span>
                    ) : (
                      <>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                          >
                            <Github size={20} />
                            <span className="text-sm font-medium">Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                          >
                            <ExternalLink size={20} />
                            <span className="text-sm font-medium">Live Demo</span>
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
