import { Search, Filter } from 'lucide-react';
import ProjectCard from '../components/Projectcard';
import { useState } from 'react';

interface ProjectsProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function Projects({ onNavigate }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Mobile', 'Web', 'Dashboard', 'E-Commerce'];

  const projects = [
    {
      id: 'fintech-app',
      title: 'FinTech Mobile Banking App',
      description: 'A revolutionary mobile banking experience with AI-powered insights and seamless money management.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0Njc2NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile App', 'UI/UX', 'FinTech'],
      category: 'mobile',
    },
    {
      id: 'saas-dashboard',
      title: 'SaaS Analytics Platform',
      description: 'Enterprise dashboard for data visualization with real-time analytics and beautiful charts.',
      image: 'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY0NjExOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Web App', 'Dashboard', 'SaaS'],
      category: 'dashboard',
    },
    {
      id: 'ecommerce-redesign',
      title: 'E-Commerce Redesign',
      description: 'Modern shopping experience with personalized recommendations and smooth checkout flow.',
      image: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NjExNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['E-Commerce', 'Mobile', 'Web'],
      category: 'e-commerce',
    },
    {
      id: 'healthcare-app',
      title: 'Healthcare Patient Portal',
      description: 'Comprehensive healthcare app for appointment booking, medical records, and telemedicine.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0Njc2NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile', 'Healthcare', 'UI/UX'],
      category: 'mobile',
    },
    {
      id: 'crypto-wallet',
      title: 'Crypto Wallet Interface',
      description: 'Secure and intuitive cryptocurrency wallet with portfolio tracking and trading features.',
      image: 'https://images.unsplash.com/photo-1762279388952-85187155e48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2NDYxNjg4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Web3', 'Mobile', 'FinTech'],
      category: 'mobile',
    },
    {
      id: 'project-management',
      title: 'Project Management Tool',
      description: 'Collaborative project management platform with kanban boards and team analytics.',
      image: 'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY0NjExOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Web App', 'Dashboard', 'Collaboration'],
      category: 'dashboard',
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 px-8 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Explore my portfolio of digital products, from mobile apps to web platforms. Each project represents a unique challenge solved through thoughtful design.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl glass-strong text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 glass-strong rounded-2xl px-2 py-2">
            <Filter size={20} className="text-gray-400 ml-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-[#00A8FF]/20 text-[#00A8FF] neon-border-blue'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => onNavigate('case-study', project.id)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { label: 'Projects Completed', value: '10+' },
            { label: 'Happy Clients', value: '6+' },
            { label: 'Years Experience', value: '4+' },
            { label: 'Design Certificates', value: '3' },
          ].map((stat, index) => (
            <div key={index} className="glass-strong rounded-2xl p-6 text-center">
              <div className="text-4xl gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Projects;