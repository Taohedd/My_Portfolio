import {
  ArrowRight,
  Download,
  Sparkles,
  Figma,
  Palette,
  Layout,
  Layers,
} from 'lucide-react';
import { ProjectCard } from '../components/Projectcard';

interface HomeProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const projects = [
    {
      id: 'fintech-app',
      title: 'FinTech Mobile Banking App',
      description:
        'A revolutionary mobile banking experience with AI-powered insights and seamless money management.',
      image:
        'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?auto=format&fit=crop&w=1080&q=80',
      tags: ['Mobile App', 'UI/UX', 'FinTech'],
      featured: true,
    },
    {
      id: 'saas-dashboard',
      title: 'SaaS Analytics Platform',
      description:
        'Enterprise dashboard for data visualization with real-time analytics and beautiful charts.',
      image:
        'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?auto=format&fit=crop&w=1080&q=80',
      tags: ['Web App', 'Dashboard', 'SaaS'],
    },
    {
      id: 'ecommerce-redesign',
      title: 'E-Commerce Redesign',
      description:
        'Modern shopping experience with personalized recommendations and smooth checkout flow.',
      image:
        'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?auto=format&fit=crop&w=1080&q=80',
      tags: ['E-Commerce', 'Mobile', 'Web'],
    },
  ];

  const tools = [
    { name: 'Figma', icon: Figma, color: '#00A8FF' },
    { name: 'Illustrator', icon: Palette, color: '#9B5CFF' },
    { name: 'Photoshop', icon: Layout, color: '#00A8FF' },
    { name: 'Framer', icon: Layers, color: '#9B5CFF' },
  ];

  return (
    <div className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] md:min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-background opacity-30" />

        {/* Floating blobs (desktop only) */}
        <div className="hidden md:block absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#00A8FF]/10 blur-3xl float" />
        <div
          className="hidden md:block absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#9B5CFF]/10 blur-3xl float"
          style={{ animationDelay: '2s' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Sparkles size={16} className="text-[#00A8FF]" />
                <span className="text-sm text-gray-300">
                  Available for freelance work
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
                Hi, I&apos;m <span className="gradient-text">Rahamon Taoheed</span> UI/UX
                Designer Building Intelligent & Beautiful Digital Experiences.
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 mb-4">
                Product Designer • Creative Technologist • Visual Problem Solver
              </p>

              <p className="text-gray-500 mb-8 leading-relaxed max-w-xl">
                I craft exceptional digital experiences that merge innovative
                design with cutting-edge technology, creating products users
                love.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('projects')}
                  className="px-8 py-4 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] hover:bg-[#00A8FF]/20 transition-all inline-flex items-center gap-2 justify-center group"
                >
                  Explore My Work
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button className="px-8 py-4 rounded-full glass hover-glow text-white transition-all inline-flex items-center gap-2 justify-center">
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                <div className="glass-strong rounded-3xl p-6 sm:p-8 pulse-glow">
                  <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1762279388952-85187155e48d?auto=format&fit=crop&w=1080&q=80"
                      alt="Tech abstract"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
                  </div>
                </div>

                {/* Floating cards desktop only */}
                <div className="hidden md:block absolute -top-6 -right-6 glass rounded-2xl p-4 float">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A8FF] to-[#9B5CFF] flex items-center justify-center">
                    <Sparkles size={24} className="text-white" />
                  </div>
                </div>

                <div
                  className="hidden md:block absolute -bottom-6 -left-6 glass rounded-2xl p-6 float"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="text-sm text-gray-400 mb-1">Experience</div>
                  <div className="text-2xl gradient-text">5+ Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-gray-400">
                A selection of my recent work
              </p>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="hidden md:inline-flex items-center gap-2 text-[#00A8FF] hover:gap-4 transition-all"
            >
              View All Projects
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() =>
                  onNavigate('case-study', project.id)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section className="px-2 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            My <span className="gradient-text">Design Arsenal</span>
          </h2>
          <p className="text-gray-400 mb-12">
            Tools I use to bring ideas to life
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {tools.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="glass-strong rounded-xl p-4 sm:p-6 hover-glow text-center flex flex-col items-center"
        >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-4 rounded-2xl bg-gradient-to-br from-[#00A8FF]/20 to-[#9B5CFF]/20 flex items-center justify-center">
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="text-sm sm:text-base text-white">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-8 sm:p-12 md:p-16 neon-border-purple">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
              Let&apos;s Create Something{' '}
              <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              Have a project in mind? Let&apos;s build it together.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] hover:bg-[#00A8FF]/20 transition-all inline-flex items-center gap-2 group"
            >
              Start a Conversation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}