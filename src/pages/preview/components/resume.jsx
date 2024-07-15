import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaLanguage } from 'react-icons/fa';

const skills = [
  { name: 'Photoshop', level: 80 },
  { name: 'Illustrator', level: 70 },
  { name: 'InDesign', level: 60 },
  { name: 'Premiere', level: 50 },
  { name: 'After Effects', level: 40 }
];

const languages = [
  { name: 'English', level: 90 },
  { name: 'Arabic', level: 70 },
  { name: 'Turkish', level: 50 }
];

const experiences = [
  { company: 'WHITE FISH ADVERTISING CO.', role: 'Art Director', duration: 'Jan 2018 - Present' },
  { company: 'PYRAMIDS SUN ADVERTISING CO.', role: 'Senior Graphic Designer', duration: 'May 2016 - Dec 2017' },
  { company: 'PLANET STATIONARY & PRINTING SERVICES CO.', role: 'Senior Graphic Designer', duration: 'Jan 2014 - Apr 2016' },
  { company: 'PLAY GRAPHIC ADVERTISING AGENCY.', role: 'Graphic Designer', duration: 'Jun 2011 - Dec 2013' },
  { company: 'MARCO FLORIDA INTERNET & COMPUTERS SERVICES CO.', role: 'Graphic Designer', duration: 'Jan 2009 - May 2011' }
];

const education = [
  { degree: 'BS/MS in Computer Science', institution: 'University of Maryland' }
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabVariants = {
    active: { scale: 1.1, y: -5 },
    inactive: { scale: 1, y: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id='resume' className="bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h1>

      <div className="flex justify-center mb-8">
        {['experience', 'skills', 'education'].map((tab) => (
          <motion.button
            key={tab}
            className={`mx-2 px-4 py-2 rounded-full ${activeTab === tab ? 'bg-white text-black' : 'bg-gray-800'}`}
            onClick={() => setActiveTab(tab)}
            variants={tabVariants}
            animate={activeTab === tab ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center"><FaBriefcase className="mr-2" /> Experience</h2>
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-4 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-gray-400">{exp.role}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center"><FaCode className="mr-2" /> Software Skills</h2>
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="mb-1">{skill.name}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center"><FaLanguage className="mr-2" /> Languages</h2>
              {languages.map((language, index) => (
                <motion.div 
                  key={language.name} 
                  className="mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: `${language.level}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="mb-1">{language.name}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${language.level}%` }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center"><FaGraduationCap className="mr-2" /> Education</h2>
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-4 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Resume;