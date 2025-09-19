import React from 'react';
import { TrendingUp, Users, Award, Globe, Star, QuoteIcon } from 'lucide-react';

const Impact = () => {
  const stats = [
    { icon: Users, value: "5,000+", label: "Teachers Trained", color: "text-blue-600" },
    { icon: Globe, value: "200+", label: "Schools Reached", color: "text-green-600" },
    { icon: Award, value: "98%", label: "Success Rate", color: "text-orange-600" },
    { icon: TrendingUp, value: "85%", label: "Career Advancement", color: "text-purple-600" }
  ];

  const testimonials = [
    {
      name: "Mrs. Adebayo Funmilayo",
      position: "Mathematics Teacher, Lagos State",
      quote: "Educatalyst transformed my teaching approach completely. The digital fluency program helped me engage my students in ways I never thought possible.",
      rating: 5,
      image: "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg"
    },
    {
      name: "Mr. Olumide Johnson",
      position: "Science Teacher, Ogun State",
      quote: "The wellness program was a game-changer. I learned to manage stress effectively while maintaining excellence in my classroom.",
      rating: 5,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      name: "Miss Blessing Okafor",
      position: "English Teacher, Abuja",
      quote: "Professional ethics training gave me confidence to handle challenging situations. My students respect me more, and my career has flourished.",
      rating: 5,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-800">Impact</span> Speaks
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real results from real educators across Nigeria who have transformed their 
            teaching practice through our comprehensive programs.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            What Our <span className="text-green-600">Teachers</span> Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <QuoteIcon className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-800 via-green-600 to-orange-500 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join the Success Stories
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
            Become part of Nigeria's largest community of professionally developed educators 
            making a real difference in their classrooms and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View All Success Stories
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;