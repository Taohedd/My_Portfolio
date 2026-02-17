import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  onClick?: () => void;
}

export function ProjectCard({ 
  title, description, image, tags, featured, onClick, }: ProjectCardProps) {
  return (
    <div 
      className={`group relative overflow-hidden rounded-3xl glass hover-glow cursor-pointer ${
        featured ? 'md:col-span-2' : ''
      }`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent"></div>
        
        {/* Neon border overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-3xl neon-border-blue"></div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs bg-[#00A8FF]/20 text-[#00A8FF] border border-[#00A8FF]/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl mb-2 text-white group-hover:text-[#00A8FF] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        <button className="inline-flex items-center gap-2 text-[#00A8FF] group-hover:gap-4 transition-all duration-300">
          View Case Study
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#00A8FF]/20 to-[#9B5CFF]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
    </div>
  );
}

export default ProjectCard;