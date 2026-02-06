'use client';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML5 / CSS3', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'PHP', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'Authentication', level: 90 },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 90 },
        { name: 'Prisma ORM', level: 90 },
        { name: 'Database Design', level: 85 },
      ],
    },
    {
      category: 'Mobile & Tools',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Git / GitHub', level: 95 },
        { name: 'Firebase', level: 80 },
        { name: 'cPanel / Deployment', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & <span className="text-primary-400">Expertise</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              A comprehensive skill set built through hands-on experience in diverse projects.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary-400 to-primary-600 rounded mr-3"></span>
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-primary-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-12 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-4">
              Additional Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'OpenAI API',
                'NextAuth',
                'JWT',
                'Prisma',
                'Firebase',
                'Redux',
                'REST',
                'Git',
                'Docker',
                'Vercel',
                'cPanel',
                'VS Code',
                'Postman',
                'Figma',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-primary-500/20 hover:text-primary-400 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
