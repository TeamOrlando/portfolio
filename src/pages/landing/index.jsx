import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { landingBg } from '../../assets/images';
import { logo } from '../../assets/images';

const Landing = () => {
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: `url(${landingBg})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="z-10 text-white text-center px-4 max-w-4xl w-full">
                <motion.h2
                    className="text-5xl md:text-6xl font-bold mb-8 tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    D<span className="relative inline-block">O<span className="absolute inset-0 flex items-center text-2xl justify-center">
                        <span className="logo-dots">··</span>
                    </span></span>PEL
                </motion.h2>
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 text-shadow"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Create Your Portfolio with Dopel
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl mb-12 text-shadow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Showcase your skills and projects with elegance and simplicity
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Link to="/signup" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 glow">
                        Get Started
                    </Link>
                    <Link to="/preview" className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300 glow">
                        View Demo
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Landing;