'use client';

import { Code2, Smartphone, Database, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expert in modern web technologies including React, Next.js, Node.js, and TypeScript',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Building native mobile experiences with React Native for iOS and Android',
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      description: 'Proficient in PostgreSQL, MySQL, Prisma ORM, and REST API design',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-primary-400">Me</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Passionate about creating elegant solutions to complex problems through clean, efficient code.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-500/10 p-3 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                      <Icon className="text-primary-400" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bio */}
          <div className="mt-16 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-slate-700/50">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a versatile full-stack developer with a proven track record of delivering high-quality software solutions
              across web and mobile platforms. My expertise spans from building AI-powered applications to enterprise-grade
              management systems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I transform ideas into robust, scalable
              applications that provide real value to users. I'm committed to writing clean, maintainable code and staying
              current with the latest industry trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
