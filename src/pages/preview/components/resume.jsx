import { motion } from 'framer-motion';

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
  return (
    <div id='resume' className="bg-black text-white p-8 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div className="space-y-4">
          <h2 className="text-2xl font-bold">Software Skills</h2>
          {skills.map(skill => (
            <div key={skill.name} className="space-y-1">
              <p>{skill.name}</p>
              <div className="relative w-full h-1 bg-gray-700">
                <div className="absolute top-0 h-1 bg-white" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
          <h2 className="text-2xl font-bold mt-8">Languages</h2>
          {languages.map(language => (
            <div key={language.name} className="space-y-1">
              <p>{language.name}</p>
              <div className="relative w-full h-1 bg-gray-700">
                <div className="absolute top-0 h-1 bg-white" style={{ width: `${language.level}%` }}></div>
              </div>
            </div>
          ))}
          <h2 className="text-2xl font-bold mt-8">Personal Skills</h2>
          {/* Add personal skills similarly */}
        </motion.div>

        <motion.div className="space-y-4 col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold">Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p>{exp.role}</p>
              <p className="text-sm text-gray-400">{exp.duration}</p>
            </div>
          ))}
          <h2 className="text-2xl font-bold mt-8">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p>{edu.institution}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
