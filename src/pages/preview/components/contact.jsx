import ScrollAnimation from './scrollAnimation';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <ScrollAnimation>
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-white text-gray-900 py-20">
        <div className="w-full max-w-4xl px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </motion.h2>
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border border-gray-200">
            <form className="space-y-6">
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </motion.div>
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button
                  className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                  type="button"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>
          <motion.div 
            className="mt-12 text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p>Or reach out directly:</p>
            <a href="mailto:your.email@example.com" className="text-gray-800 hover:text-black transition duration-300">Losibe27@gmail.com</a>
          </motion.div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Contact;