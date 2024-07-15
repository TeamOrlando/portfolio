import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center pt-20">
        {/* Text content */}
        <motion.div 
          className="w-full lg:w-1/2 lg:pr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-2">hi there, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Loretta Osibe</h1>
          <p className="text-xl md:text-2xl">Junior Front-End Developer</p>
        </motion.div>
        
        {/* Image */}
        <motion.div 
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <img 
            src="/path-to-your-image.jpg" 
            alt="Your Name" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}