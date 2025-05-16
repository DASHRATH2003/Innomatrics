import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Applications' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'cloud', name: 'Cloud Solutions' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Enterprise Resource Planning System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive ERP solution for manufacturing businesses with modules for inventory, production, HR, and finance.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      link: '#'
    },
    {
      id: 2,
      title: 'Healthcare Patient Management App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Mobile application for healthcare providers to manage patient records, appointments, and treatment plans.',
      technologies: ['React Native', 'Firebase', 'Express.js'],
      link: '#'
    },
    {
      id: 3,
      title: 'Predictive Maintenance System',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1581092921461-39b9d007dfb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'AI-powered system that predicts equipment failures before they occur, reducing downtime and maintenance costs.',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
      link: '#'
    },
    {
      id: 4,
      title: 'Multi-Cloud Infrastructure Management',
      category: 'cloud',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Unified dashboard for managing resources across AWS, Azure, and Google Cloud with automated scaling and optimization.',
      technologies: ['Terraform', 'Kubernetes', 'Go', 'Vue.js'],
      link: '#'
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Scalable e-commerce solution with advanced product management, payment processing, and analytics.',
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'Redis'],
      link: '#'
    },
    {
      id: 6,
      title: 'Augmented Reality Product Viewer',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'AR application that allows users to visualize products in their real environment before purchasing.',
      technologies: ['Unity', 'ARKit', 'ARCore', 'C#'],
      link: '#'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-blue-600">Featured</span> Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Explore our portfolio of successful projects that showcase our expertise and innovation.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300"
          >
            Start Your Project With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
