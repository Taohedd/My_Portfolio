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
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto glass-strong rounded-3xl px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="relative group"
        >
          <span className="text-2xl tracking-tight">
            <span className="gradient-text">RAHAMON TAOHEED AYOMIDE</span>
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00A8FF] to-[#9B5CFF] group-hover:w-full transition-all duration-300"></div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative px-4 py-2 transition-all duration-300 ${
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
          <button className="px-6 py-2.5 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] transition-all duration-300 hover:bg-[#00A8FF]/20">
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 max-w-7xl mx-auto glass-strong rounded-3xl p-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-[#00A8FF]/20 text-[#00A8FF]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="mt-2 px-6 py-3 rounded-xl neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF]">
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
