import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import { Zap, Code, Cpu, Menu, X, Home, Users, FileText, Trophy, Mail } from 'lucide-react';
import { theme } from '../theme';

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'problems', label: 'Problems', icon: FileText },
    { id: 'events', label: 'Events', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Enhanced Navbar - Container Fluid */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-slate-900/20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left Logo with Image */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden border-2 border-cyan-500/50">
                <img 
                  src="/api/placeholder/48/48" 
                  alt="College Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>
              <div className="text-white hidden sm:block">
                <div className="text-sm lg:text-base font-bold">COLLEGE</div>
                <div className="text-xs lg:text-sm text-slate-400">LOGO</div>
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-slate-800/50"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Logo with Image */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="text-white text-right hidden sm:block">
                <div className="text-sm lg:text-base font-bold">SPONSOR</div>
                <div className="text-xs lg:text-sm text-slate-400">LOGO</div>
              </div>
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden border-2 border-purple-500/50">
                <img 
                  src="/api/placeholder/48/48" 
                  alt="Sponsor Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Code className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors ml-4"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>
      
      {/* Main Hero Content - Container Fluid */}
      <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 lg:pt-24">
        <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
          {/* Department Name */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="inline-block bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
              <span className="text-cyan-400 text-xs sm:text-sm lg:text-base font-semibold tracking-wider">
                DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
              </span>
            </div>
          </div>

          {/* Floating Technical Icons - Responsive positioning */}
          <div className="hidden xl:block absolute -top-20 -left-20 opacity-20">
            <div className="w-24 h-24 border-2 border-cyan-400 rounded-full flex items-center justify-center">
              <Zap className="w-12 h-12 text-cyan-400 icon-glow" />
            </div>
          </div>
          <div className="hidden xl:block absolute -top-10 -right-16 opacity-20">
            <div className="w-16 h-16 border-2 border-purple-400 rounded-full flex items-center justify-center">
              <Code className="w-8 h-8 text-purple-400 icon-glow" />
            </div>
          </div>
          <div className="hidden xl:block absolute -bottom-10 left-1/4 opacity-20">
            <div className="w-20 h-20 border-2 border-emerald-400 rounded-full flex items-center justify-center">
              <Cpu className="w-10 h-10 text-emerald-400 icon-glow" />
            </div>
          </div>

          {/* Main heading with responsive design */}
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-4 lg:mb-6 heading-font">
              <span className="gradient-text">INNOVATE</span>
              <span className="text-cyan-400">-X</span>
            </h1>
            
            {/* Subtitle with responsive styling */}
            <div className="relative">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 lg:mb-6 text-slate-300 font-medium tracking-wide">
                WHERE INNOVATION MEETS TECHNOLOGY
              </p>
              <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
            </div>
          </div>
          
          {/* Enhanced Motivational Quote - Responsive */}
          <div className="mb-6 sm:mb-16 lg:mb-20">
            <blockquote className="text-sm sm:text-base md:text-lg lg:text-l xl:text-xl italic max-w-4xl mx-auto">
              <div className="relative bg-slate-900/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8">
                <span className="text-purple-400 text-2xl sm:text-3xl lg:text-4xl absolute -top-1 sm:-top-2 -left-1 sm:-left-2">"</span>
                <span className="text-slate-200 font-light leading-relaxed">
                  The future belongs to those who understand that technology is not just about code,
                  but about creating solutions that transform humanity
                </span>
                <span className="text-purple-400 text-2xl sm:text-3xl lg:text-4xl absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2">"</span>
              </div>
            </blockquote>
          </div>
          
          
          {/* Enhanced Countdown Timer */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <CountdownTimer />
          </div>
          
          {/* Enhanced CTA Section - Responsive */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">

            {/* Event Info - Responsive */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 xl:space-x-12 text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm lg:text-base">Registration Open</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm lg:text-base">24 Hour Hackathon</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-sm lg:text-base">AI & Cyber Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;