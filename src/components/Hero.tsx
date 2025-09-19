import React from 'react';
import { ArrowRight, Play, Users, Award, BookOpen } from 'lucide-react';


const Hero = () => {
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden" id="home">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="image/image3.webp" 
          alt="Nigerian teachers in modern classroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/90 via-blue-400/50 to-green-400/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 text-center pt-24 sm:pt-30 lg:pt-1">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming Education
            <span className="block text-green-400">Through Teacher Excellence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elevating professional standards, digital fluency, and personal well-being among educators 
            through innovative teacher development programs across Nigeria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
            onClick={() => {
    const nextSection = document.getElementById('contact');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
    className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2" 
    >
              <span>Join the Revolution</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/30 flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Story</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">5,000+</div>
              <div className="text-gray-300">Teachers Transformed</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
                <Award className="h-8 w-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 ">3</div>
              <div className="text-gray-300">Core Programs</div>
            </div>
          </div>
        </div>
      </div>

<div
  onClick={() => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
>
  <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
    <div className="w-1 h-3 bg-white/70 rounded-full mt-1 animate-pulse"></div>
  </div>
</div>

    </section>
  );
};

export default Hero;
