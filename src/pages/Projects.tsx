import { Search, Filter } from 'lucide-react';
import ProjectCard from '../components/Projectcard';
import { useState } from 'react';
import PageWrapper from '../common/page-wrapper';
import sicklecellimg from '../assets/projects/Sicklecell.jpg';
import wasteimg from '../assets/projects/Wasteapp1.jpg';
import tidalwave from '../assets/projects/Tidalwave.jpg';
import GIITSC from '../assets/projects/giitc.jpg';

interface ProjectsProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function Projects({ onNavigate }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState(''); // Added search state

  const categories = ['All', 'Mobile', 'Web', 'Dashboard', 'E-Commerce'];

  const projects = [
    {
      // ERROR FIX: ID must match projectdata.tsx keys exactly
      id: 'waste-management', 
      title: 'Waste Management App',
      description: 'WasteGrid is a mobile application designed to help citizens manage waste responsibly while earning rewards.',
      image: wasteimg,
      tags: ['Mobile App', 'UI/UX', 'Waste'],
      category: 'mobile',
    },
    {
      // ERROR FIX: ID must match projectdata.tsx keys exactly
      id: 'sickle-cell', 
      title: 'Sickle Cell Management App',
      description: 'AmbleVerse is a mobile health and support app designed specifically for people living with sickle cell.',
      image: sicklecellimg,
      tags: ['Mobile App', 'UI/UX', 'Health'],
      category: 'mobile',
    },
    {
      // ERROR FIX: ID must match projectdata.tsx keys exactly
      id: 'tidal-wave', 
      title: 'Tidal Wave Waste Management App',
      description: 'TidalWave is a smart IoT-powered waste management mobile application connecting citizens and authorities.',
      image: tidalwave,
      tags: ['Waste', 'Mobile', 'Web'],
      category: 'mobile',
    },
    {
      id: 'giitsc-it', 
      title: 'Global Impact IT Solutions',
      description: 'Technology solutions company dedicated to helping organizations improve efficiency through innovative I.T. services.',
      image: GIITSC,
      tags: ['Web', 'UI/UX', 'IT'],
      category: 'web',
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

  // Combined Filter for Search and Category
  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 leading-snug">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-full sm:max-w-2xl leading-relaxed">
            Explore my portfolio of digital products. Each project represents a unique challenge solved through thoughtful design.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-6 sm:mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-2xl glass-strong text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00A8FF]/50"
            />
          </div>

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
              // ERROR FIX: Match the 'casestudy' case in App.tsx
              onClick={() => onNavigate('casestudy', project.id)} 
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
    </PageWrapper>
  );
}

export default Projects;