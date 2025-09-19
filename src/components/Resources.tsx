import React, { useState } from 'react';
import { Download, BookOpen, Video, FileText, Search, Filter, Star } from 'lucide-react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 150 },
    { id: 'guides', name: 'Teaching Guides', count: 45 },
    { id: 'videos', name: 'Video Tutorials', count: 32 },
    { id: 'templates', name: 'Templates', count: 28 },
    { id: 'research', name: 'Research Papers', count: 25 },
    { id: 'tools', name: 'Digital Tools', count: 20 }
  ];

  const resources = [
    {
      id: 1,
      title: "Complete Guide to Classroom Management",
      description: "Comprehensive strategies for maintaining positive learning environments and student engagement.",
      type: "guides",
      format: "PDF",
      pages: "85 pages",
      downloads: "2.5k",
      rating: 4.9,
      featured: true,
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
    },
    {
      id: 2,
      title: "Digital Tools for Modern Teaching",
      description: "Essential educational technology tools and platforms for 21st-century educators.",
      type: "tools",
      format: "Interactive Guide",
      pages: "50+ tools",
      downloads: "3.2k",
      rating: 4.8,
      featured: true,
      image: "https://images.pexels.com/photos/5212671/pexels-photo-5212671.jpeg"
    },
    {
      id: 3,
      title: "Teacher Wellness Workbook",
      description: "Self-care strategies and mental health resources specifically designed for educators.",
      type: "guides",
      format: "PDF + Audio",
      pages: "65 pages",
      downloads: "1.8k",
      rating: 4.9,
      featured: false,
      image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg"
    },
    {
      id: 4,
      title: "Professional Ethics Case Studies",
      description: "Real-world scenarios and ethical decision-making frameworks for educators.",
      type: "research",
      format: "PDF",
      pages: "120 pages",
      downloads: "1.5k",
      rating: 4.7,
      featured: false,
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
    },
    {
      id: 5,
      title: "Lesson Plan Templates Collection",
      description: "Ready-to-use templates for various subjects and grade levels.",
      type: "templates",
      format: "Word + PDF",
      pages: "30 templates",
      downloads: "4.1k",
      rating: 4.8,
      featured: true,
      image: "https://images.pexels.com/photos/5212671/pexels-photo-5212671.jpeg"
    },
    {
      id: 6,
      title: "Virtual Classroom Setup Guide",
      description: "Step-by-step instructions for creating effective online learning environments.",
      type: "videos",
      format: "Video Series",
      pages: "12 videos",
      downloads: "2.2k",
      rating: 4.6,
      featured: false,
      image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.type === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Educational <span className="text-blue-800">Resources</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of teaching guides, templates, research papers, 
            and digital tools designed to support your professional development journey.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        {activeCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              Featured Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.filter(resource => resource.featured).map((resource) => (
                <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h4>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {resource.format}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{resource.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{resource.pages}</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    
                    <button className="w-full bg-blue-800 hover:bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download Free</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Resources */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            All Resources ({filteredResources.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  {resource.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h4>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {resource.format}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.pages}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  
                  <button className="w-full bg-blue-800 hover:bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download Free</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated with New Resources
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Get notified when we release new teaching guides, templates, and educational resources. 
            Join our community of 10,000+ educators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;