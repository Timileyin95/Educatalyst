import React from 'react';
import { Calendar, Trophy, Users, Lightbulb, ArrowRight, Clock, MapPin } from 'lucide-react';

const Hackathon = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Develop cutting-edge educational solutions"
    },
    {
      icon: Users,
      title: "Collaborative Teams",
      description: "Work with fellow educators and tech experts"
    },
    {
      icon: Trophy,
      title: "Amazing Prizes",
      description: "Win cash prizes and implementation support"
    }
  ];

  const pastWinners = [
    {
      project: "EduTrack Mobile",
      team: "Digital Learning Pioneers",
      description: "Student progress tracking app for rural schools",
      prize: "₦2,000,000"
    },
    {
      project: "VR Chemistry Lab",
      team: "Science Innovators",
      description: "Virtual reality chemistry experiments platform",
      prize: "₦1,500,000"
    },
    {
      project: "AI Tutor Assistant",
      team: "Future Educators",
      description: "AI-powered personalized learning assistant",
      prize: "₦1,000,000"
    }
  ];

  return (
    <section id="hackathon" className="py-20 bg-gradient-to-br from-purple-900 via-blue-800 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Teacher Innovation <span className="text-yellow-400">Hackathon</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Join Nigeria's premier educational technology competition where teachers become innovators, 
            creating solutions that transform classrooms across the nation.
          </p>
        </div>

        {/* Event Details */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Next Event</h3>
              <p className="text-gray-200">March 15-17, 2024</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-200">Lagos & Virtual</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Duration</h3>
              <p className="text-gray-200">48 Hours</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">₦5,000,000 in Total Prizes</h3>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 mx-auto">
              <span>Register Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Past Winners */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            2023 <span className="text-blue-800">Winning Projects</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastWinners.map((winner, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {winner.prize}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{winner.project}</h4>
                <p className="text-blue-600 font-medium mb-2">{winner.team}</p>
                <p className="text-gray-600">{winner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Innovate Education?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you're a teacher, developer, or education enthusiast, join us in creating 
            the next generation of educational technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View Past Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;