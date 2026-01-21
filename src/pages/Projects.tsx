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
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?auto=format&fit=crop&w=1080&q=80',
      tags: ['Mobile App', 'UI/UX', 'FinTech'],
      category: 'mobile',
    },
    {
      id: 'saas-dashboard',
      title: 'SaaS Analytics Platform',
      description: 'Enterprise dashboard for data visualization with real-time analytics and beautiful charts.',
      image: 'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?auto=format&fit=crop&w=1080&q=80',
      tags: ['Web App', 'Dashboard', 'SaaS'],
      category: 'dashboard',
    },
    {
      id: 'ecommerce-redesign',
      title: 'E-Commerce Redesign',
      description: 'Modern shopping experience with personalized recommendations and smooth checkout flow.',
      image: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?auto=format&fit=crop&w=1080&q=80',
      tags: ['E-Commerce', 'Mobile', 'Web'],
      category: 'e-commerce',
    },
    {
      id: 'healthcare-app',
      title: 'Healthcare Patient Portal',
      description: 'Comprehensive healthcare app for appointment booking, medical records, and telemedicine.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?auto=format&fit=crop&w=1080&q=80',
      tags: ['Mobile', 'Healthcare', 'UI/UX'],
      category: 'mobile',
    },
    {
      id: 'crypto-wallet',
      title: 'Crypto Wallet Interface',
      description: 'Secure and intuitive cryptocurrency wallet with portfolio tracking and trading features.',
      image: 'https://images.unsplash.com/photo-1762279388952-85187155e48d?auto=format&fit=crop&w=1080&q=80',
      tags: ['Web3', 'Mobile', 'FinTech'],
      category: 'mobile',
    },
    {
      id: 'project-management',
      title: 'Project Management Tool',
      description: 'Collaborative project management platform with kanban boards and team analytics.',
      image: 'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?auto=format&fit=crop&w=1080&q=80',
      tags: ['Web App', 'Dashboard', 'Collaboration'],
      category: 'dashboard',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 leading-snug">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-full sm:max-w-2xl leading-relaxed">
            Explore my portfolio of digital products, from mobile apps to web platforms. Each project represents a unique challenge solved through thoughtful design.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-6 sm:mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-2xl glass-strong text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 items-center glass-strong rounded-2xl px-2 py-2">
            <Filter size={20} className="text-gray-400 ml-1 sm:ml-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-sm sm:text-base transition-all duration-300 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => onNavigate('case-study', project.id)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-12 sm:mt-16">
          {[
            { label: 'Projects Completed', value: '10+' },
            { label: 'Happy Clients', value: '6+' },
            { label: 'Years Experience', value: '4+' },
            { label: 'Design Certificates', value: '3' },
          ].map((stat, index) => (
            <div key={index} className="glass-strong rounded-2xl p-3 sm:p-6 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl gradient-text mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects; 