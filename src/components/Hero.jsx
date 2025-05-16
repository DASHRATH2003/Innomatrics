import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  // State for rotating images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Software-related images that will rotate automatically - using useMemo to prevent recreation on each render
  const softwareImages = useMemo(() => [
    "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Coding screen
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Code on laptop
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Code syntax highlighting
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Laptop with code
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Laptop code closeup
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Code on monitor
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Programming laptop
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Coding close-up
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"  // Code on screen
  ], []);

  // Preload images for smoother transitions
  useEffect(() => {
    softwareImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [softwareImages]);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % softwareImages.length);
    }, 6000); // Slightly longer duration for each image

    return () => clearInterval(interval);
  }, [softwareImages.length]);

  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Animated code elements
  const codeSnippets = [

  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Rotating background images with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 z-10 opacity-20 mix-blend-overlay pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
          </svg>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Main background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${softwareImages[currentImageIndex]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'brightness(1.0) contrast(1.1) saturate(1.2)'
              }}
            ></div>

            {/* Gradient overlay - much lighter */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40"></div>

            {/* Animated light effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-purple-500/15"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>

            {/* Additional glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan-500/5 to-blue-500/10"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            ></motion.div>
          </motion.div>
        </AnimatePresence>
      </div>





      {/* Animated code lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={`code-${index}`}
            initial={{ opacity: 0, x: -100, y: Math.random() * window.innerHeight }}
            animate={{
              opacity: [0, 0.7, 0],
              x: [
                -100,
                window.innerWidth + 100
              ]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute text-blue-300 font-mono text-sm opacity-30 whitespace-nowrap"
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(80)].map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.1
            }}
            animate={{
              opacity: Math.random() * 0.6 + 0.1,
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 400,
                Math.random() * window.innerHeight
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth + (Math.random() > 0.5 ? 100 : -100),
                Math.random() * window.innerWidth
              ]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: index % 3 === 0
                ? `rgb(59, 130, 246, ${Math.random() * 0.5 + 0.5})` // Blue
                : index % 3 === 1
                  ? `rgb(139, 92, 246, ${Math.random() * 0.5 + 0.5})` // Purple
                  : `rgb(14, 165, 233, ${Math.random() * 0.5 + 0.5})`, // Sky blue
              boxShadow: `0 0 ${Math.random() * 5 + 2}px rgba(${
                index % 3 === 0 ? '59, 130, 246' : index % 3 === 1 ? '139, 92, 246' : '14, 165, 233'
              }, 0.7)`
            }}
          />
        ))}
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={`tech-element-${index}`}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0
            }}
            animate={{
              opacity: 0.15,
              rotate: 360,
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth + (Math.random() > 0.5 ? 200 : -200),
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight + (Math.random() > 0.5 ? 200 : -200),
                Math.random() * window.innerHeight
              ]
            }}
            transition={{
              duration: Math.random() * 60 + 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              border: `1px solid rgba(${
                index % 2 === 0 ? '59, 130, 246, 0.3' : '139, 92, 246, 0.3'
              })`,
              borderRadius: index % 2 === 0 ? '50%' : '0%',
              background: `radial-gradient(circle, rgba(${
                index % 2 === 0 ? '59, 130, 246, 0.05' : '139, 92, 246, 0.05'
              }), transparent)`
            }}
          />
        ))}
      </div>

      {/* 3D Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={`float-${index}`}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0
            }}
            animate={{
              opacity: 0.2,
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-40 h-40 border border-blue-500/20 rounded-lg"
            style={{
              background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
              backdropFilter: 'blur(5px)'
            }}
          />
        ))}
      </div>

      {/* Hero content - Just 3 lines and a button */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Software Solutions</span>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-xl md:text-2xl text-white font-medium mb-6 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] bg-black/20 px-6 py-2 rounded-full inline-block"
          >
            Building powerful applications for tomorrow's challenges
          </motion.p>

          <motion.p
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-white mb-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] max-w-2xl mx-auto"
          >
            Custom development, cloud solutions, and digital transformation services
          </motion.p>

          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 border-2 border-white/20"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.5)",
                  textShadow: "0 0 8px rgba(255,255,255,0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>

              <motion.a
                href="#about"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-white/30 transition duration-300 border-2 border-white/30"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.2)",
                  textShadow: "0 0 8px rgba(255,255,255,0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated tech icons at the bottom */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center space-x-8 overflow-hidden"
        >
          <div className="flex space-x-8 animate-marquee">
            {[
              { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
              { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
              { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
              { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", name: "AWS" },
              { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
              { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", name: "Kubernetes" },
              { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", name: "TensorFlow" },
              { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full p-2 flex items-center justify-center"
              >
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add CSS for animations and utilities */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
};

export default Hero;
