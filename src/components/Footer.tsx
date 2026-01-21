import { Linkedin, Dribbble, Github, Mail, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#00A8FF' },
    { icon: Dribbble, href: '#', label: 'Dribbble', color: '#9B5CFF' },
    { icon: Github, href: '#', label: 'Github', color: '#00A8FF' },
    { icon: Mail, href: '#', label: 'Email', color: '#9B5CFF' },
  ];

  return (
    <footer className="relative mt-24 px-4 sm:px-6 lg:px-8 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00A8FF]/50 to-transparent mb-8 sm:mb-12"></div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 gradient-text">Rahamon Taoheed Ayomide</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              UI/UX Designer crafting beautiful and intelligent digital experiences with a focus on innovation and user-centered design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-3 sm:mb-4 text-white">Quick Links</h4>
            <div className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
              <a href="#" className="text-gray-400 hover:text-[#00A8FF] transition-colors">Projects</a>
              <a href="#" className="text-gray-400 hover:text-[#00A8FF] transition-colors">About Me</a>
              <a href="#" className="text-gray-400 hover:text-[#00A8FF] transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-[#00A8FF] transition-colors">Resume</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg mb-3 sm:mb-4 text-white">Let's Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center hover-glow group"
                    style={{
                      borderColor: social.color + '40',
                    }}
                  >
                    <Icon 
                      size={18} 
                      className="group-hover:text-white transition-colors"
                      style={{ color: social.color }}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-2 sm:gap-4 pt-6 border-t border-white/10 text-sm">
          <p className="text-gray-500">
            © 2025 Taoheed. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center gap-1 sm:gap-2">
            Designed with <Heart size={12} className="text-[#9B5CFF]" fill="#9B5CFF" /> in the future
          </p>
        </div>
      </div>
    </footer>
  );
}
