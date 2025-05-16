import { motion } from 'framer-motion';

const Career = () => {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      description: "We're looking for an experienced Frontend Developer with expertise in React, TypeScript, and modern web technologies.",
      requirements: [
        "5+ years of experience in frontend development",
        "Strong proficiency in React, Redux, and TypeScript",
        "Experience with responsive design and CSS frameworks",
        "Knowledge of modern frontend build tools"
      ]
    },
    {
      title: "Backend Engineer",
      location: "Remote / New York, NY",
      type: "Full-time",
      description: "Join our backend team to build scalable and robust APIs and services that power our applications.",
      requirements: [
        "3+ years of experience in backend development",
        "Proficiency in Node.js, Python, or Java",
        "Experience with RESTful APIs and microservices",
        "Knowledge of database design and optimization"
      ]
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Help us build and maintain our cloud infrastructure and CI/CD pipelines to ensure smooth deployment and operation.",
      requirements: [
        "3+ years of experience in DevOps or SRE roles",
        "Experience with AWS, Azure, or GCP",
        "Knowledge of containerization and orchestration tools",
        "Experience with CI/CD pipelines and automation"
      ]
    },
    {
      title: "UX/UI Designer",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      description: "Create beautiful and intuitive user interfaces that provide exceptional user experiences for our products.",
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in design tools like Figma or Adobe XD",
        "Understanding of user-centered design principles",
        "Experience with design systems and component libraries"
      ]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "We offer competitive compensation packages that recognize your skills and experience."
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance for you and your dependents."
    },
    {
      icon: "🏖️",
      title: "Flexible PTO",
      description: "Generous paid time off policy to ensure you maintain a healthy work-life balance."
    },
    {
      icon: "🌱",
      title: "Professional Growth",
      description: "Continuous learning opportunities, conference stipends, and career development."
    },
    {
      icon: "🏠",
      title: "Remote Work",
      description: "Flexible remote work options with occasional team meetups and retreats."
    },
    {
      icon: "💻",
      title: "Equipment Allowance",
      description: "Budget for your home office setup and the latest technology tools."
    }
  ];

  return (
    <section id="career" className="py-20 bg-white">
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
              JOIN OUR TEAM
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Career <span className="text-blue-600">Opportunities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join our team of talented professionals and help us build innovative software solutions
          </motion.p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current Openings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{job.location}</span>
                </div>
                <p className="text-gray-600 mb-6">{job.description}</p>
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Requirements:</h5>
                  <ul className="space-y-2">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Work With Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 mb-6">Don't see a position that matches your skills?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Send Us Your Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
