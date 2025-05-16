import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: 150, label: 'Projects Completed', suffix: '+' },
    { value: 50, label: 'Happy Clients', suffix: '+' },
    { value: 10, label: 'Years Experience', suffix: '+' },
    { value: 25, label: 'Team Members', suffix: '+' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Our <span className="text-blue-400">Impact</span> in Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            We take pride in our achievements and the trust our clients place in us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <CounterCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterCard = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const countIncrement = stat.value / totalFrames;

      let currentFrame = 0;
      const counter = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const currentCount = Math.round(countIncrement * currentFrame);

        if (currentFrame === totalFrames) {
          setCount(stat.value);
          clearInterval(counter);
        } else {
          setCount(currentCount);
        }
      }, frameDuration);

      return () => clearInterval(counter);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300"
    >
      <h3 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        {count}{stat.suffix}
      </h3>
      <p className="text-xl text-blue-100">{stat.label}</p>
    </motion.div>
  );
};

export default Stats;
