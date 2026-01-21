import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="relative z-50 px-2 sm:px-4 lg:px-8 py-4 sm:py-6">
  <div className="max-w-7xl mx-auto glass-strong rounded-3xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-wrap">
    {/* Logo */}
    <button 
      onClick={() => onNavigate('home')}
      className="relative group mb-2 sm:mb-0"
    >
      <span className="text-xl sm:text-2xl tracking-tight">
        <span className="gradient-text">Rahamon Taoheed</span>
      </span>
      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00A8FF] to-[#9B5CFF] group-hover:w-full transition-all duration-300"></div>
    </button>

    {/* Desktop Navigation */}
    <div className="hidden md:flex flex-wrap items-center gap-4 lg:gap-8">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`relative px-3 sm:px-4 py-2 transition-all duration-300 text-sm sm:text-base ${
            currentPage === item.id
              ? 'text-[#00A8FF]'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {item.label}
          {currentPage === item.id && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00A8FF] to-[#9B5CFF]"></div>
          )}
        </button>
      ))}
      <button className="px-4 sm:px-6 py-2.5 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] text-sm sm:text-base transition-all duration-300 hover:bg-[#00A8FF]/20 whitespace-nowrap">
        Let's Talk
      </button>
    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden text-white ml-auto"
    >
      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="w-full mt-2 glass-strong rounded-3xl p-4 sm:p-6 md:hidden">
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-xl text-sm transition-all duration-300 ${
                currentPage === item.id
                  ? 'bg-[#00A8FF]/20 text-[#00A8FF]'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button className="mt-2 px-4 py-2 rounded-xl neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] text-sm sm:text-base w-full text-center">
            Let's Talk
          </button>
        </div>
      </div>
    )}
  </div>
</nav>
  );
}