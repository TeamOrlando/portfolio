
import { useState } from 'react';
import ScrollAnimation from "./scrollAnimation";
import { motion } from 'framer-motion';
import { aboutBg } from '../../../assets/images';

const About = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [expandedSkill, setExpandedSkill] = useState(null);

    const skills = [
        { name: 'React', description: 'Building interactive UIs' },
        { name: 'JavaScript', description: 'Core language for web development' },
        { name: 'HTML', description: 'Structure of web pages' },
        { name: 'CSS', description: 'Styling web pages' },
        { name: 'Tailwind', description: 'Utility-first CSS framework' },
        { name: 'Git', description: 'Version control system' },
    ];

    return (
        <ScrollAnimation>
            <section id="about" className={`relative min-h-screen flex flex-col justify-center items-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-gradient-to-br from-blue-400 to-purple-500 z-0"></div>
                <div className="container mx-auto px-4 z-10">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-black"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={aboutBg} alt="Loretta" className="w-full max-w-md rounded-lg shadow-xl" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#672731] dark:text-blue-400">About Me</h2>
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Hello! I&apos;m Loretta, a passionate and motivated Front-End Developer. I specialize in creating responsive, user-friendly web applications using the latest technologies. I am eager to contribute to innovative projects and continuously improve my skills. When I&apos;m not coding, I enjoy painting, hiking, and exploring new technologies. I believe in the power of teamwork and am always ready to take on new challenges.
                            </p>

                            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                                {skills.map(skill => (
                                    <motion.div
                                        key={skill.name}
                                        className={`p-4 rounded-lg cursor-pointer transition duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                                        onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <h3 className="font-semibold">{skill.name}</h3>
                                        {expandedSkill === skill.name && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-2 text-sm"
                                            >
                                                {skill.description}
                                            </motion.p>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <motion.a
                                href="#contact"
                                className="inline-block mt-8 px-6 py-3 bg-[#672731] text-white rounded-full hover:bg-[#E49070] transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </ScrollAnimation>
    );
};

export default About;