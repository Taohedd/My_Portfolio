import { Mail, MapPin, Phone, Send, Linkedin, Dribbble, Github, Twitter } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'taoheedrahamon4@gmail.com', href: 'mailto:taoheedrahamon4@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+234 815270 3433', href: 'tel:+2348152703433' },
    { icon: MapPin, label: 'Location', value: 'Ibadan, Oyo State Nigeria', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#00A8FF' },
    { icon: Dribbble, href: '#', label: 'Dribbble', color: '#9B5CFF' },
    { icon: Github, href: '#', label: 'Github', color: '#00A8FF' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#9B5CFF' },
  ];

  return (
   <div className="min-h-screen pt-12 sm:pt-20 px-2 sm:px-6 lg:px-8 pb-8 sm:pb-12">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-6 sm:mb-10 px-1 sm:px-0">
      <h1 className="text-2xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 leading-snug">
        Let's <span className="gradient-text">Connect</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-full sm:max-w-2xl mx-auto">
        Have a project in mind or just want to chat about design? I'd love to hear from you. Let's build something extraordinary together.
      </p>
    </div>
{/* Form + Contact Info */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6">
  {/* Contact Form */}
  <div>
    <div className="glass-strong rounded-2xl p-3 sm:p-6">
      <h2 className="text-lg sm:text-xl mb-2 sm:mb-4">Send Me a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
        {['name','email','subject'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
              {field === 'name' ? 'Your Name' : field === 'email' ? 'Email Address' : 'Subject'}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              required
              placeholder={field === 'name' ? 'John Doe' : field === 'email' ? 'john@example.com' : 'Project Inquiry'}
              className="w-full px-2 sm:px-3 py-2 rounded-xl glass border border-[#00A8FF]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/20 transition-all"
            />
          </div>
        ))}

        <div>
          <label htmlFor="message" className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-2 sm:px-3 py-2 rounded-xl glass border border-[#00A8FF]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/20 transition-all resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] hover:bg-[#00A8FF]/20 transition-all duration-300 inline-flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          {submitted ? 'Message Sent!' : <>Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" /></>}
        </button>
      </form>
    </div>
  </div>

      {/* Contact Info & Social */}
      <div className="space-y-2 sm:space-y-6">
        {/* Contact Cards */}
        <div className="space-y-2 sm:space-y-3">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                className="glass-strong rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-4 hover-glow group"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#00A8FF]/20 to-[#9B5CFF]/20 flex items-center justify-center">
                  <Icon size={18} className="text-[#00A8FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-400 mb-1 truncate">{info.label}</div>
                  <div className="text-sm sm:text-base text-white group-hover:text-[#00A8FF] truncate">{info.value}</div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="glass-strong rounded-xl p-3 sm:p-5">
          <h3 className="text-sm sm:text-lg mb-2 sm:mb-3 truncate">Connect on Social</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="glass rounded-xl p-2 sm:p-4 flex flex-col items-center gap-1 sm:gap-2 hover-glow group"
                >
                  <div
                    className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ background: `${social.color}20`, border: `1px solid ${social.color}40` }}
                  >
                    <Icon size={16} className="group-hover:scale-110 transition-transform" style={{ color: social.color }} />
                  </div>
                  <span className="text-xs sm:text-sm truncate text-gray-400 group-hover:text-white transition-colors">{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>

  {/* Availability */}
<div className="glass-strong rounded-lg p-2 sm:p-4 border-l-2 sm:border-l-4 border-[#00A8FF]">
  <div className="flex items-start gap-2 sm:gap-3">
    {/* Status Dot */}
    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00FF00] mt-1 shrink-0 pulse-glow" />

    {/* Text */}
    <div className="flex-1">
      <h4 className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">
        Currently Available
      </h4>
      <p className="text-[11px] sm:text-sm text-gray-400 leading-snug">
        Accepting new projects and freelance opportunities. Let’s build something great together.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-8 sm:mt-12 text-center glass-strong rounded-2xl p-4 sm:p-8 neon-border-purple">
      <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">
        Let's Build Something <span className="gradient-text">Extraordinary</span> Together
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-full sm:max-w-2xl mx-auto">
        Whether you have a clear vision or just an idea, I'm here to help transform it into a beautiful, functional digital experience.
      </p>
    </div>

  </div>
</div>
  );
}

export default Contact;