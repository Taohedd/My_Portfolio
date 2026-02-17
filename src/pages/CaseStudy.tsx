import { ArrowLeft, Calendar, Users, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { projectdata } from '../projectdata'; 
import homeImg from '../assets/projects/homepage.jpg';

interface CaseStudyProps {
  projectId?: string;
  // FIX: Added optional id to match your handleNavigate function in App.tsx
  onNavigate: (page: string, id?: string) => void; 
}

export function CaseStudy({ projectId, onNavigate }: CaseStudyProps) {
  // LOOKUP LOGIC: Ensure we have a valid project object
  const project = projectId && projectdata[projectId as keyof typeof projectdata] 
    ? projectdata[projectId as keyof typeof projectdata] 
    : projectdata['waste-management'];

  // Safety return if data is somehow still missing
  if (!project) return <div className="pt-40 text-center text-white">Project not found.</div>;

  return (
    <div className="min-h-screen pt-8 px-4 sm:px-6 lg:px-8 pb-24">
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
          <div className="relative h-[260px] sm:h-80 md:h-96">
            <img
              src={project.image || homeImg}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/70 to-transparent flex items-end">
              <div className="p-8 md:p-12 w-full">
                <h1 className="text-xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-bold">
                  {project.title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-300">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 font-bold">
            Project <span className="gradient-text">Overview</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {[
              { label: 'Role', value: project.overview.role, icon: Users },
              { label: 'Duration', value: project.overview.duration, icon: Calendar },
              { label: 'Platform', value: project.overview.platform, icon: Target },
              { label: 'Year', value: project.overview.year, icon: TrendingUp },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass-strong rounded-2xl p-6">
                  <Icon style={{ color: project.themeColor }} className="mb-3" size={24} />
                  <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                  <div className="text-white">{item.value}</div>
                </div>
              );
            })}
          </div>
          <div className="glass rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8 font-bold">
            The <span className="gradient-text">Problem</span>
          </h2>
          <div className="glass-strong rounded-2xl p-8 border-l-4" style={{ borderColor: project.themeColor }}>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.problem}
            </p>
          </div>
        </section>

        {/* Aim & Objectives */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl mb-6 font-bold">
                Project <span className="gradient-text">Aim</span>
              </h2>
              <div className="glass-strong rounded-2xl p-8 border-t-4 h-full" style={{ borderColor: project.themeColor }}>
                <p className="text-gray-300 leading-relaxed italic">
                  {project.aim}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl mb-6 font-bold">
                Key <span className="gradient-text">Objectives</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project?.objectives.map((obj: string, index: number) => (
                  <div key={index} className="glass rounded-xl p-4 flex items-start gap-3 border border-white/5">
                    <div 
                      className="mt-1 w-2 h-2 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: project.themeColor }} 
                    />
                    <p className="text-sm text-gray-300">{obj}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
<br />
        {/* Research Insights */}
        {project.insights && project.insights.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl mb-8 font-bold">
              Research <span className="gradient-text">Insights</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.insights.map((insight: any, index: number) => (
                <div key={index} className="glass-strong rounded-2xl p-8 text-center hover-glow transition-all">
                  <div className="text-5xl mb-4 font-bold" style={{ color: insight.color }}>
                    {insight.stat}
                  </div>
                  <p className="text-gray-400">{insight.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* User Personas */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8 font-bold">
            User <span className="gradient-text">Personas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.personas.map((persona: any, index: number) => (
              <div key={index} className="glass-strong rounded-2xl p-8 border border-white/5">
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                    style={{ background: `linear-gradient(to bottom right, ${project.themeColor}, #4F46E5)` }}
                  >
                    {persona.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{persona.name}</h3>
                    <p className="text-sm text-gray-400">Age: {persona.age}</p>
                    <p className="text-sm font-semibold tracking-wide" style={{ color: project.themeColor }}>{persona.role}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-bold">Goal</div>
                    <div className="text-gray-200">{persona.goal}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-bold">Pain Point</div>
                    <div className="text-gray-200">{persona.pain}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* User Flow */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8 font-bold">
            User <span className="gradient-text">Flow</span>
          </h2>
          <div className="glass-strong rounded-2xl p-8 overflow-x-auto">
            <div className="flex items-center gap-6 min-w-max pb-4">
              {project.userFlow.map((step: string, index: number) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="glass rounded-xl px-4 py-4 text-center min-w-[140px] border border-white/5">
                    <div 
                        className="w-8 h-8 rounded-full text-white flex items-center justify-center mx-auto mb-3 font-bold shadow-lg"
                        style={{ backgroundColor: project.themeColor }}
                    >
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium text-gray-300">{step}</div>
                  </div>
                  {index < project.userFlow.length - 1 && (
                    <div className="w-12 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Designs */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8 font-bold">
            Final <span className="gradient-text">UI Screens</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {project.screens.map((screen: string, index: number) => (
              <div key={index} className="glass-strong rounded-3xl overflow-hidden hover-glow transition-transform duration-500">
                <img
                  src={screen}
                  alt={`${project.title} screen ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-8 font-bold">
            Outcomes & <span className="gradient-text">Impact</span>
          </h2>
          <div className="glass-strong rounded-2xl p-8 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {project.outcomes.map((outcome: any, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 style={{ color: project.themeColor }} className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="text-2xl font-bold gradient-text mb-1">{outcome.metric}</div>
                    <div className="text-sm text-gray-400 leading-relaxed">{outcome.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-8 mt-4">
               <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold">Conclusion</h4>
               <p className="text-gray-300 leading-relaxed italic text-lg">
                "{project.conclusion}"
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}