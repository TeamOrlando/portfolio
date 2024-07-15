// Loader.jsx
import { motion } from 'framer-motion';

const Loader = () => (
  <div className="flex justify-center items-center h-screen bg-black">
    <motion.div
      className="text-white text-6xl font-bold flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
    >
      D
      <motion.div
        className="inline-block w-12 h-12 rounded-full border-4 border-white mx-1"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
      </motion.div>
      PEL
    </motion.div>
  </div>
);

export default Loader;