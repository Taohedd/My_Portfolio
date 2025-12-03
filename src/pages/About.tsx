import { Download, Award, Briefcase, GraduationCap, Code2, Palette, Layers, Zap } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const skills = [
    { name: 'UI Design', level: 95, icon: Palette },
    { name: 'UX Research', level: 90, icon: Briefcase },
    { name: 'Prototyping', level: 92, icon: Layers },
    { name: 'Design Systems', level: 88, icon: Code2 },
    { name: 'Motion Design', level: 85, icon: Zap },
    { name: 'User Testing', level: 87, icon: Award },
  ];

  const journey = [
    {
      year: '2024 - Present',
      title: 'Senior UI/UX Designer',
      company: 'Tech Innovations Inc.',
      description: 'Leading design initiatives for enterprise SaaS products, managing a team of 5 designers.',
    },
    {
      year: '2022 - 2024',
      title: 'UI/UX Designer',
      company: 'Digital Solutions Co.',
      description: 'Designed mobile and web applications for various clients across different industries.',
    },
    {
      year: '2020 - 2022',
      title: 'Junior Designer',
      company: 'Creative Agency',
      description: 'Worked on branding, web design, and user interface projects for startups.',
    },
    {
      year: '2016 - 2020',
      title: 'Bachelor in Design',
      company: 'University of Arts',
      description: 'Graduated with honors, specializing in digital design and human-computer interaction.',
      isEducation: true,
    },
  ];

  const keywords = [
    'User-Centered Design', 'Visual Design', 'Interaction Design', 'Wireframing',
    'Prototyping', 'Design Thinking', 'Usability Testing', 'Information Architecture',
    'Responsive Design', 'Mobile First', 'Accessibility', 'Design Systems',
    'Micro-interactions', 'Design Sprint', 'A/B Testing', 'Figma Expert',
  ];

  return (
    <div className="min-h-screen pt-32 px-8 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Left - Photo */}
          <div className="relative">
            <div className="glass-strong rounded-3xl overflow-hidden p-4 neon-border-blue">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ2MDA0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Taoheed"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-6 neon-border-purple">
              <div className="text-sm text-gray-400 mb-1">Years Experience</div>
              <div className="text-3xl gradient-text">4+</div>
            </div>
          </div>

          {/* Right - Bio */}
          <div>
            <h1 className="text-5xl md:text-6xl mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="glass-strong rounded-2xl p-8 mb-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                Hi, I'm <span className="text-[#00A8FF]">Rahamon Taoheed Ayomide</span> — a passionate UI/UX Designer with over 4 years of experience crafting beautiful, intuitive, and functional digital products. I believe great design is where aesthetics meets purpose.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My approach combines user research, creative problem-solving, and cutting-edge design techniques to create experiences that not only look stunning but also deliver real value to users and businesses.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not designing, you'll find me exploring new design trends, contributing to design communities, or experimenting with the latest design tools and technologies.
              </p>
            </div>
            <button className="px-8 py-4 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] hover:bg-[#00A8FF]/20 transition-all duration-300 inline-flex items-center gap-2 group">
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl mb-12">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="glass-strong rounded-2xl p-6 hover-glow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A8FF]/20 to-[#9B5CFF]/20 flex items-center justify-center">
                      <Icon size={24} className="text-[#00A8FF]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-sm text-[#00A8FF]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#00A8FF] to-[#9B5CFF] rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl mb-12">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00A8FF] via-[#9B5CFF] to-transparent hidden md:block"></div>

            <div className="space-y-8">
              {journey.map((item, index) => (
                <div key={index} className="relative pl-0 md:pl-24">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-[#00A8FF] to-[#9B5CFF] hidden md:block ring-4 ring-[#0A0A0F]"></div>

                  <div className="glass-strong rounded-2xl p-6 md:p-8 hover-glow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-sm text-[#00A8FF] mb-2">{item.year}</div>
                        <h3 className="text-xl md:text-2xl mb-1">{item.title}</h3>
                        <p className="text-gray-400">{item.company}</p>
                      </div>
                      {item.isEducation ? (
                        <GraduationCap className="text-[#9B5CFF]" size={24} />
                      ) : (
                        <Briefcase className="text-[#00A8FF]" size={24} />
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keywords Cloud */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl mb-12 text-center">
            Design <span className="gradient-text">Expertise</span>
          </h2>
          <div className="glass-strong rounded-3xl p-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-6 py-3 rounded-full glass neon-border-blue text-[#00A8FF] hover:bg-[#00A8FF]/20 transition-all duration-300 cursor-default hover:scale-110"
                  style={{
                    fontSize: `${0.875 + Math.random() * 0.5}rem`,
                  }}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="glass-strong rounded-3xl p-12 text-center neon-border-purple">
            <h2 className="text-3xl md:text-4xl mb-4">
              Interested in <span className="gradient-text">Working Together?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] hover:bg-[#00A8FF]/20 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;