import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import {useLocation, useNavigate } from 'react-router-dom'; // Added routing imports

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get current URL path
  const navigate = useNavigate();

  interface Navigation {
    id: number;
    label: string;
    href: string;
  }

  const navItems: Navigation[] = [
    { id: 1, label: 'Home', href: '/' }, // IDs changed to path strings
    { id: 2, label: 'Projects', href: '/projects' },
    { id: 3, label: 'About', href: '/about' },
    { id: 4, label: 'Contact', href: '/contact' },
  ];

  const handleRoute = (e: string) => {
    if (e.startsWith("https")) {
      window.open(e, '_blank', 'noopener,noreferrer');
    } else {
      navigate(e);
    }
  }

  // Helper to check if a link is currently active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="relative z-50 px-2 sm:px-4 lg:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto glass-strong rounded-3xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-wrap">
        
        {/* Logo - Link to Home */}
        <div
          onClick={()=> handleRoute("/")}
          className="relative group mb-2 sm:mb-0"
        >
          <span className="text-xl sm:text-2xl tracking-tight">
            <span className="gradient-text">Rahamon Taoheed</span>
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#00A8FF] to-[#9B5CFF] group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Desktop Navigation - Swapped buttons for Links */}
        <div className="hidden md:flex flex-wrap items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleRoute(item.href)}
              className={`relative px-3 sm:px-4 py-2 transition-all cursor-pointer duration-300 text-sm sm:text-base ${
                isActive(item.href)
                  ? 'text-[#00A8FF]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-[#00A8FF] to-[#9B5CFF]"></div>
              )}
            </div>
          ))}
          
          <div onClick={() => handleRoute("https://t.me/Ragner200")} className="px-4 sm:px-6 py-2.5 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] text-sm sm:text-base transition-all duration-300 hover:bg-[#00A8FF]/20 whitespace-nowrap">
            Let's Talk
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white ml-auto"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu - Swapped buttons for Links */}
        {mobileMenuOpen && (
          <div className="w-full mt-2 glass-strong rounded-3xl p-4 sm:p-6 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {setMobileMenuOpen(false), handleRoute(item.href)}}
                  className={`text-left px-3 py-2 rounded-xl text-sm transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-[#00A8FF]/20 text-[#00A8FF]'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </div>
              ))}
              <div
                onClick={() => {setMobileMenuOpen(false), handleRoute("/contact")}}
                className="mt-2 px-4 py-2 rounded-xl neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] text-sm sm:text-base w-full text-center"
              >
                Let's Talk
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}