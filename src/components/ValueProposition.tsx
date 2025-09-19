import React from 'react';
import { Target, Lightbulb, Heart, TrendingUp } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: Target,
      title: "Professional Excellence",
      description: "Elevating teaching standards through evidence-based methodologies and best practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Cutting-edge digital tools and modern pedagogical approaches for 21st-century education."
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Supporting educator mental health and well-being for sustainable teaching excellence."
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "Data-driven outcomes that demonstrate real improvement in teaching effectiveness."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="next-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-800">Educatalyst</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're transforming the educational landscape in Nigeria by empowering teachers 
            with the skills, tools, and support they need to excel in their profession.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-800 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-blue-800 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-800 to-green-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Teaching Journey?
            </h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of Nigerian educators who have already elevated their professional standards 
              and are making a lasting impact in their classrooms.
            </p>
            <button
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
>
  Get Started Today
</button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;