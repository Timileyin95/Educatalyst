import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Programs', href: '#programs' },
    { name: 'Hackathon', href: '#hackathon' },
    { name: 'Experts', href: '#experts' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
    onClick={() => {
    const nextSection = document.getElementById('home');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
    className={`fixed w-full z-50 transition-all duration-300 cursor-pointer  ${
      scrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <GraduationCap className="h-8 w-8 text-blue-800" />
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-blue-800' : 'text-white'
            }`}>
              Educatalyst
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-blue-800' 
                      : 'text-white hover:text-green-400'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button
              onClick={() => {
    const nextSection = document.getElementById('contact');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform">
                Join the Revolution
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full text-left bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg font-medium mt-4">
              Join the Revolution
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;