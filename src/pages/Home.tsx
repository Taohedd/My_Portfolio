import { ArrowRight, Download, Sparkles, Figma, Palette, Layout, Layers } from 'lucide-react';
import ProjectCard from '../components/Projectcard';
import homeImg from '../assets/projects/homepage.jpg'

interface HomeProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const projects = [
   {
    id: 'Waste Management App',
    title: 'Smart Waste Smarter Planet',
    description: 'A revolutionary mobile banking experience...',
    image: homeImg,  // ← Changed
    tags: ['Mobile App', 'UI/UX', 'Waste Management'],
    featured: true,
  },
    {
      id: 'saas-dashboard',
      title: 'SaaS Analytics Platform',
      description: 'Enterprise dashboard for data visualization with real-time analytics and beautiful charts.',
      image: 'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY0NjExOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Web App', 'Dashboard', 'SaaS'],
    },
    {
      id: 'ecommerce-redesign',
      title: 'E-Commerce Redesign',
      description: 'Modern shopping experience with personalized recommendations and smooth checkout flow.',
      image: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NjExNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-8 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 grid-background opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#00A8FF]/10 blur-3xl float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#9B5CFF]/10 blur-3xl float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <Sparkles size={16} className="text-[#00A8FF]" />
                <span className="text-sm text-gray-300">Available for freelance work</span>
              </div>

              <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
                Hi, I'm <span className="gradient-text">Taoheed</span> UI/UX Designer Building Intelligent & Beautiful Digital Experiences.
              </h1>

              <p className="text-xl text-gray-400 mb-4">
                Product Designer • Creative Technologist • Visual Problem Solver
              </p>

              <p className="text-gray-500 mb-8 leading-relaxed max-w-xl">
                I craft exceptional digital experiences that merge innovative design with cutting-edge technology, creating products that users love and businesses grow with.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => onNavigate('projects')}
                  className="px-8 py-4 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] hover:bg-[#00A8FF]/20 transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  Explore My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-full glass hover-glow text-white transition-all duration-300 inline-flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Right Content - Tech Profile */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main glass card */}
                <div className="glass-strong rounded-3xl p-8 pulse-glow">
                  <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-[#00A8FF]/20 to-[#9B5CFF]/20 overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1762279388952-85187155e48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2NDYxNjg4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Tech Abstract"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent"></div>
                  </div>
                </div>

                {/* Floating UI elements */}
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 float">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A8FF] to-[#9B5CFF] flex items-center justify-center">
                    <Sparkles size={24} className="text-white" />
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 float" style={{ animationDelay: '1s' }}>
                  <div className="text-sm text-gray-400 mb-1">Experience</div>
                  <div className="text-2xl gradient-text">4+ Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-gray-400">
                A selection of my recent work in digital product design
              </p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="hidden md:inline-flex items-center gap-2 text-[#00A8FF] hover:gap-4 transition-all duration-300"
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
                onClick={() => onNavigate('case-study', project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              My <span className="gradient-text">Design Arsenal</span>
            </h2>
            <p className="text-gray-400">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="glass-strong rounded-2xl p-8 hover-glow text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00A8FF]/20 to-[#9B5CFF]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={32} style={{ color: tool.color }} />
                  </div>
                  <h3 className="text-lg text-white">{tool.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-12 md:p-16 neon-border-purple">
            <h2 className="text-4xl md:text-5xl mb-6">
              Let's Create Something <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Have a project in mind? Let's discuss how we can work together to bring your vision to life.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] hover:bg-[#00A8FF]/20 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Start a Conversation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;