import { ArrowLeft, Calendar, Users, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import homeImg from '../assets/projects/homepage.jpg'
interface CaseStudyProps {
  projectId?: string;
  onNavigate: (page: string) => void;
}

export function CaseStudy({ projectId, onNavigate }: CaseStudyProps) {
  const project = {
    title: 'Waste Management App',
    subtitle: 'Smart Waste, Smarter Planet',
    Image: homeImg,
    overview: {
      role: 'Lead UI/UX Designer',
      duration: '4 months',
      platform: 'iOS & Android',
      year: '2024',
    },
  };

  return (
    <div className="min-h-screen pt-32 px-8 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00A8FF] transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        {/* Hero Header */}
        <div className="glass-strong rounded-3xl overflow-hidden mb-16">
          <div className="relative h-96">
            <img
              src={project.Image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/70 to-transparent flex items-end">
              <div className="p-8 md:p-12 w-full">
                <h1 className="text-4xl md:text-6xl mb-4 text-white">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8">
            Project <span className="gradient-text">Overview</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Role', value: project.overview.role, icon: Users },
              { label: 'Duration', value: project.overview.duration, icon: Calendar },
              { label: 'Platform', value: project.overview.platform, icon: Target },
              { label: 'Year', value: project.overview.year, icon: TrendingUp },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass-strong rounded-2xl p-6">
                  <Icon className="text-[#00A8FF] mb-3" size={24} />
                  <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                  <div className="text-white">{item.value}</div>
                </div>
              );
            })}
          </div>
          <div className="glass rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed">
              A next-generation mobile waste-management application that integrates gamified learning experiences to educate users on effective recycling methods. The app enables users to track their waste, discover recycling opportunities, and play interactive games to earn rewards that provide financial support.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8">
            The <span className="gradient-text">Problem</span>
          </h2>
          <div className="glass-strong rounded-2xl p-8 border-l-4 border-[#9B5CFF]">
            <p className="text-gray-300 leading-relaxed mb-4">
              Across many African cities, poor waste management persists due to inefficient collection systems, limited recycling infrastructure, and low public awareness.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Although interest in sustainability is rising, existing solutions still fail to offer accessible and engaging ways for residents to learn proper waste sorting and adopt community-driven recycling habits.
            </p>
          </div>
        </section>

        {/* Research Insights */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8">
            Research <span className="gradient-text">Insights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: '73%',
                label: 'Users find waste managment apps difficult to manage and use.',
                color: '#00A8FF',
              },
              {
                stat: '68%',
                label: 'Want gamified section of the mobile app',
                color: '#9B5CFF',
              },
              {
                stat: '82%',
                label: 'Prefer to learn on the go',
                color: '#00A8FF',
              },
            ].map((insight, index) => (
              <div key={index} className="glass-strong rounded-2xl p-8 text-center hover-glow">
                <div className="text-5xl mb-4" style={{ color: insight.color }}>
                  {insight.stat}
                </div>
                <p className="text-gray-400">{insight.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* User Personas */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8">
            User <span className="gradient-text">Personas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Sarah',
                age: '28',
                role: 'Young Professional',
                goal: 'Aims to manage and improve her waste recycling process conveniently from home.',
                pain: 'Finds it difficult to locate reliable recycling centers nearby.',
              },
              {
                name: 'Michael',
                age: '42',
                role: 'Business Owner',
                goal: 'Wants a simple and reliable way to monitor when waste pickups and recycling services are due.y',
                pain: 'Feels overwhelmed by the time and effort required to manage household waste properly.',
              },
            ].map((persona, index) => (
              <div key={index} className="glass-strong rounded-2xl p-8 neon-border-blue">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00A8FF] to-[#9B5CFF] flex items-center justify-center text-2xl">
                    {persona.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">{persona.name}</h3>
                    <p className="text-sm text-gray-400">Age: {persona.age}</p>
                    <p className="text-sm text-[#00A8FF]">{persona.role}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Goal</div>
                    <div className="text-white">{persona.goal}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Pain Point</div>
                    <div className="text-white">{persona.pain}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* User Flow */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8">
            User <span className="gradient-text">Flow</span>
          </h2>
          <div className="glass-strong rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {[
                'Launch App',
                'Biometric Auth',
                'View Dashboard',
                'Check Insights',
                'Manage Wastes',
                
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="glass rounded-xl px-6 py-4 text-center min-w-[140px]">
                    <div className="w-8 h-8 rounded-full bg-[#00A8FF] text-white flex items-center justify-center mx-auto mb-2">
                      {index + 1}
                    </div>
                    <div className="text-sm text-gray-300">{step}</div>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block w-8 h-px bg-gradient-to-r from-[#00A8FF] to-[#9B5CFF]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Designs */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8">
            Final <span className="gradient-text">UI Screens</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((screen) => (
              <div key={screen} className="glass-strong rounded-2xl overflow-hidden hover-glow">
                <div className="aspect-[9/16] bg-gradient-to-br from-[#00A8FF]/20 to-[#9B5CFF]/20 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0Njc2NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt={`Screen ${screen}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8">
            Outcomes & <span className="gradient-text">Impact</span>
          </h2>
          <div className="glass-strong rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { metric: '45%', label: 'Increase in daily active users' },
                { metric: '60%', label: 'Reduction in support tickets' },
                { metric: '4.8/5', label: 'App store rating' },
                { metric: '92%', label: 'User satisfaction score' },
              ].map((outcome, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="text-[#00A8FF]" size={24} />
                  <div>
                    <div className="text-2xl gradient-text">{outcome.metric}</div>
                    <div className="text-sm text-gray-400">{outcome.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              The redesigned banking app achieved remarkable success, significantly improving user engagement and satisfaction. The intuitive interface and AI-powered insights helped users better understand their finances, leading to increased savings rates and financial literacy.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
