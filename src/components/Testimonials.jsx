import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Innomatrics Technology transformed our business with their innovative software solutions. Their team's expertise and dedication exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, TechVision Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "Working with Innomatrics has been a game-changer for our company. Their custom software development has streamlined our operations and increased productivity.",
      author: "Michael Chen",
      position: "CTO, GlobalTech",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "The mobile app developed by Innomatrics has received outstanding feedback from our users. Their attention to detail and user experience focus is unmatched.",
      author: "Emily Rodriguez",
      position: "Product Manager, AppSolutions",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      quote: "Innomatrics delivered our cloud migration project on time and under budget. Their technical expertise and project management skills are exceptional.",
      author: "David Wilson",
      position: "IT Director, Enterprise Systems",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            What Our <span className="text-blue-600">Clients</span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100,
                  zIndex: currentIndex === index ? 10 : 0
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <div className="bg-white rounded-2xl shadow-xl p-10 h-full flex flex-col justify-between">
                  <div>
                    <svg className="w-12 h-12 text-blue-500 mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-xl text-gray-700 italic mb-8">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{testimonial.author}</h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
