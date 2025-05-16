import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "Development",
      items: [
        { name: "Web Development", level: 95 },
        { name: "Mobile Development", level: 90 },
        { name: "Desktop Applications", level: 85 },
        { name: "API Development", level: 92 }
      ]
    },
    {
      category: "Programming",
      items: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C#/.NET", level: 88 }
      ]
    },
    {
      category: "Data & AI",
      items: [
        { name: "Machine Learning", level: 85 },
        { name: "Data Analysis", level: 88 },
        { name: "Big Data", level: 80 },
        { name: "Natural Language Processing", level: 82 }
      ]
    }
  ];

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
    <section id="skills" className="py-20 bg-gray-50">
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
            Professional <span className="text-blue-600">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our team possesses a wide range of technical skills to deliver exceptional software solutions
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 * skillIndex }}
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
