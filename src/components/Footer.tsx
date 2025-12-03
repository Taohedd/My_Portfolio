import { Linkedin, Dribbble, Github, Mail, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#00A8FF' },
    { icon: Dribbble, href: '#', label: 'Dribbble', color: '#9B5CFF' },
    { icon: Github, href: '#', label: 'Github', color: '#00A8FF' },
    { icon: Mail, href: '#', label: 'Email', color: '#9B5CFF' },
  ];

  return (
    <footer className="relative mt-32 px-8 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00A8FF]/50 to-transparent mb-12"></div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 gradient-text">RAHAMON TAOHEED AYOMIDE</h3>
            <p className="text-gray-400 leading-relaxed">
              UI/UX Designer crafting beautiful and intelligent digital experiences with a focus on innovation and user-centered design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-white">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-[#00A8FF] transition-colors">Projects</a>
              <a href="#" className="text-gray-400 hover:text-[#00A8FF] transition-colors">About Me</a>
              <a href="#" className="text-gray-400 hover:text-[#00A8FF] transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-[#00A8FF] transition-colors">Resume</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg mb-4 text-white">Let's Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover-glow group"
                    style={{
                      borderColor: social.color + '40',
                    }}
                  >
                    <Icon 
                      size={20} 
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © 2025 Taoheed. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Designed with <Heart size={14} className="text-[#9B5CFF]" fill="#9B5CFF" /> in the future
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 