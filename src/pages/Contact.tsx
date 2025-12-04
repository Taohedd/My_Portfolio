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
    {
      icon: Mail,
      label: 'Email',
      value: 'taoheedrahamon4@gmail.com',
      href: 'mailto:taoheedrahamon4@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 815270 3433',
      href: 'tel:+234 9064386898',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#00A8FF' },
    { icon: Dribbble, href: '#', label: 'Dribbble', color: '#9B5CFF' },
    { icon: Github, href: '#', label: 'Github', color: '#00A8FF' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#9B5CFF' },
  ];

  return (
    <div className="min-h-screen pt-32 px-8 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat about design? I'd love to hear from you. Let's build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="glass-strong rounded-3xl p-8">
              <h2 className="text-2xl mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-[#00A8FF]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-[#00A8FF]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl glass border border-[#00A8FF]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/20 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl glass border border-[#00A8FF]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full neon-border-blue bg-[#00A8FF]/10 text-[#00A8FF] hover:bg-[#00A8FF]/20 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                >
                  {submitted ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="glass-strong rounded-2xl p-6 flex items-center gap-4 hover-glow group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00A8FF]/20 to-[#9B5CFF]/20 flex items-center justify-center">
                      <Icon size={24} className="text-[#00A8FF]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                      <div className="text-white group-hover:text-[#00A8FF] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-xl mb-6">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="glass rounded-xl p-6 flex flex-col items-center gap-3 hover-glow group"
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background: `${social.color}20`,
                          border: `1px solid ${social.color}40`,
                        }}
                      >
                        <Icon
                          size={24}
                          className="group-hover:scale-110 transition-transform"
                          style={{ color: social.color }}
                        />
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-strong rounded-2xl p-8 border-l-4 border-[#00A8FF]">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#00FF00] mt-1 pulse-glow"></div>
                <div>
                  <h3 className="text-lg mb-2">Currently Available</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I'm currently accepting new projects and freelance opportunities. Let's discuss how I can help bring your vision to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center glass-strong rounded-3xl p-12 neon-border-purple">
          <h3 className="text-3xl md:text-4xl mb-4">
            Let's Build Something <span className="gradient-text">Extraordinary</span> Together
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you have a clear vision or just an idea, I'm here to help transform it into a beautiful, functional digital experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact; 