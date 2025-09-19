import React from 'react';
import { Award, BookOpen, GraduationCap, Users, ExternalLink } from 'lucide-react';

const TeamExperts = () => {
  const experts = [
    {
      name: "Pastor Gbenga Adefolu",
      title: "Professional Educational Expert",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      bio: "With over 15 years of experience in educational leadership and professional development, Pastor Adefolu brings deep expertise in teacher training and curriculum design.",
      credentials: [
        "M.Ed in Educational Leadership",
        "Certified Professional Development Trainer",
        "15+ Years Educational Experience",
        "Published Educational Researcher"
      ],
      specialties: ["Professional Ethics", "Educational Leadership", "Teacher Training", "Curriculum Development"]
    },
    {
      name: "Akinode John Lekan",
      title: "Senior Lecturer & Digital Education Innovation Specialist",
      subtitle: "Computer Science Department, Federal Polytechnic Ilaro",
      image: "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg",
      bio: "A leading expert in educational technology integration, Mr. Akinode specializes in bridging the gap between traditional teaching methods and modern digital solutions.",
      credentials: [
        "MS.c in Computer Science",
        "Senior Lecturer Position",
        "Digital Innovation Specialist",
        "EdTech Research Leader"
      ],
      specialties: ["Digital Fluency", "Educational Technology", "Innovation Strategy", "Online Learning"]
    }
  ];

  return (
    <section id="experts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-800">Expert Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Led by renowned educational professionals and technology innovators who are passionate 
            about transforming teaching excellence across Nigeria.
          </p>
        </div>

        <div className="space-y-16">
          {experts.map((expert, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-800 text-white p-4 rounded-xl shadow-lg">
                    <Award className="h-8 w-8" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {expert.name}
                    </h3>
                    <p className="text-lg font-semibold text-blue-800 mb-1">
                      {expert.title}
                    </p>
                    {expert.subtitle && (
                      <p className="text-gray-600 font-medium">
                        {expert.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {expert.bio}
                  </p>

                  {/* Credentials */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                      Credentials & Experience
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {expert.credentials.map((credential, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{credential}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {expert.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="group bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                      <span>View Full Profile</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-800 to-green-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-200">Expert Trainers</div>
            </div>
            <div>
              <Award className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-200">Years Combined Experience</div>
            </div>
            <div>
              <GraduationCap className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-200">Certifications Held</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamExperts;