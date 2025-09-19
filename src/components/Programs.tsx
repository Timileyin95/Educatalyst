import React, { useState } from 'react';
import { Users, Monitor, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      icon: Users,
      title: "Behavioral & Professional Ethics",
      subtitle: "Building Character & Integrity",
      description: "Comprehensive training in professional conduct, ethical decision-making, and classroom management that creates positive learning environments.",
      features: [
        "Professional conduct standards",
        "Ethical decision-making frameworks",
        "Classroom management techniques",
        "Conflict resolution strategies",
        "Student engagement best practices"
      ],
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
      color: "blue"
    },
    {
      icon: Monitor,
      title: "Digital Fluency & Responsible Tech Use",
      subtitle: "Mastering 21st Century Tools",
      description: "Advanced digital literacy training covering modern educational technologies, online safety, and innovative teaching methodologies.",
      features: [
        "Educational technology mastery",
        "Online safety and digital citizenship",
        "Virtual classroom management",
        "Interactive learning tools",
        "Digital assessment strategies"
      ],
      image: "https://images.pexels.com/photos/5212671/pexels-photo-5212671.jpeg",
      color: "green"
    },
    {
      icon: Heart,
      title: "Wellness & Mental Health for Educators",
      subtitle: "Nurturing Teacher Well-being",
      description: "Holistic wellness programs focusing on mental health, stress management, and work-life balance for sustainable teaching careers.",
      features: [
        "Stress management techniques",
        "Work-life balance strategies",
        "Mental health awareness",
        "Self-care practices",
        "Peer support networks"
      ],
      image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg",
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      hover: "hover:bg-blue-800",
      border: "border-blue-800",
      gradient: "from-blue-800 to-blue-600"
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-800",
      hover: "hover:bg-green-800",
      border: "border-green-800",
      gradient: "from-green-800 to-green-600"
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-800",
      hover: "hover:bg-orange-800",
      border: "border-orange-800",
      gradient: "from-orange-800 to-orange-600"
    }
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-800">Core Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Three comprehensive pillars designed to transform every aspect of your teaching practice 
            and professional development journey.
          </p>
        </div>

        {/* Program Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program, index) => (
            <button
              key={index}
              onClick={() => setActiveProgram(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeProgram === index
                  ? `${colorClasses[program.color].bg} ${colorClasses[program.color].text} border-2 ${colorClasses[program.color].border}`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <program.icon className="h-5 w-5" />
              <span className="hidden sm:inline">{program.title}</span>
              <span className="sm:hidden">{program.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Program Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {(() => {
              const IconComponent = programs[activeProgram].icon;
              return (
            <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses[programs[activeProgram].color].bg} rounded-full mb-6`}>
              <IconComponent className={`h-8 w-8 ${colorClasses[programs[activeProgram].color].text}`} />
            </div>
              );
            })()}
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {programs[activeProgram].title}
            </h3>
            <p className={`text-lg font-medium mb-4 ${colorClasses[programs[activeProgram].color].text}`}>
              {programs[activeProgram].subtitle}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {programs[activeProgram].description}
            </p>

            <div className="space-y-4 mb-8">
              {programs[activeProgram].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className={`h-5 w-5 ${colorClasses[programs[activeProgram].color].text} flex-shrink-0`} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`group bg-gradient-to-r ${colorClasses[programs[activeProgram].color].gradient} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2`}>
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={programs[activeProgram].image}
                alt={programs[activeProgram].title}
                className="w-full h-96 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses[programs[activeProgram].color].gradient} opacity-20`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;