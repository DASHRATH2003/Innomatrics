import { motion } from 'framer-motion';
import { useState } from 'react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Main service categories
  const categories = [
    {
      id: 'development',
      name: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure and services',
      icon: (
        <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'consulting',
      name: 'IT Consulting',
      description: 'Expert guidance to optimize your technology investments',
      icon: (
        <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'digital',
      name: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge digital solutions',
      icon: (
        <svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'mobile',
      name: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for all devices',
      icon: (
        <svg className="w-16 h-16 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Handle category selection
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setShowDetails(true);
  };

  // Handle back button click
  const handleBackClick = () => {
    setShowDetails(false);
    setActiveCategory(null);
  };

  // Detailed service offerings
  const services = [
    {
      id: 1,
      title: 'Custom Software Development',
      category: 'development',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      description: 'Tailored software solutions designed to address your specific business challenges and requirements.',
      features: [
        'Full-cycle development from concept to deployment',
        'Scalable architecture for future growth',
        'Cross-platform compatibility',
        'Rigorous testing and quality assurance'
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      category: 'development',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: [
        'iOS and Android development',
        'React Native and Flutter expertise',
        'Intuitive UI/UX design',
        'Offline functionality and synchronization'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 3,
      title: 'Web Application Development',
      category: 'development',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      ),
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user engagement.',
      features: [
        'Progressive Web Apps (PWAs)',
        'Single Page Applications (SPAs)',
        'Responsive design for all screen sizes',
        'Performance optimization and SEO'
      ],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 4,
      title: 'Cloud Migration',
      category: 'cloud',
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      description: 'Seamless migration of your existing infrastructure and applications to the cloud for improved scalability and cost efficiency.',
      features: [
        'Assessment and planning',
        'Minimal downtime migration strategies',
        'Data integrity and security',
        'Post-migration optimization'
      ],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Management',
      category: 'cloud',
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      ),
      description: 'Comprehensive management of your cloud infrastructure to ensure optimal performance, security, and cost-effectiveness.',
      features: [
        '24/7 monitoring and support',
        'Automated scaling and load balancing',
        'Security compliance and updates',
        'Cost optimization strategies'
      ],
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 6,
      title: 'DevOps Implementation',
      category: 'cloud',
      icon: (
        <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      ),
      description: 'Streamline your development and operations processes with automated CI/CD pipelines and infrastructure as code.',
      features: [
        'Continuous Integration/Continuous Deployment',
        'Infrastructure as Code (IaC)',
        'Automated testing and quality gates',
        'Monitoring and logging solutions'
      ],
      image: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 7,
      title: 'IT Strategy Consulting',
      category: 'consulting',
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      description: 'Strategic guidance to align your technology investments with your business objectives for maximum ROI.',
      features: [
        'Technology roadmap development',
        'Digital maturity assessment',
        'Vendor selection and management',
        'IT governance frameworks'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 8,
      title: 'Technology Assessment',
      category: 'consulting',
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      ),
      description: 'Comprehensive evaluation of your current technology stack to identify opportunities for improvement and optimization.',
      features: [
        'Technical debt analysis',
        'Security and compliance audit',
        'Performance optimization recommendations',
        'Scalability assessment'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 9,
      title: 'Digital Transformation',
      category: 'digital',
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      description: 'End-to-end digital transformation services to modernize your business processes and customer experiences.',
      features: [
        'Business process reengineering',
        'Legacy system modernization',
        'Digital customer experience design',
        'Change management and adoption'
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 10,
      title: 'AI & Machine Learning Solutions',
      category: 'digital',
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      description: 'Harness the power of artificial intelligence and machine learning to gain insights, automate processes, and drive innovation.',
      features: [
        'Predictive analytics and forecasting',
        'Natural language processing',
        'Computer vision solutions',
        'Recommendation engines'
      ],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // We don't need filteredServices anymore since we're using activeCategory and showDetails

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              OUR EXPERTISE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-blue-600">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {showDetails
              ? `Explore our ${categories.find(c => c.id === activeCategory)?.name} offerings`
              : 'We offer a wide range of technology solutions tailored to meet your business needs and drive growth'
            }
          </motion.p>
        </div>

        {/* Back button - only shown when viewing details */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 flex justify-center"
          >
            <motion.button
              onClick={handleBackClick}
              className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to All Services
            </motion.button>
          </motion.div>
        )}

        {/* Main content - either categories or service details */}
        {!showDetails ? (
          // Service Categories Grid
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Explore Services
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Service Details for Selected Category
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services
              .filter(service => service.category === activeCategory)
              .map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-2 bg-gray-50 rounded-lg">
                        {service.icon}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 pt-0">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gray-100 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
