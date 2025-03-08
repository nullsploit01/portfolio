import { motion } from 'framer-motion';
import React, { useState } from 'react';

type ExperienceType = {
  role: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
};

const experiences = [
  {
    role: 'Coding Instructor',
    company: 'CurioBug',
    location: 'Remote',
    duration: 'July 2024 – Present',
    responsibilities: [
      'Taught Python fundamentals and advanced Python programming with a focus on practical, real-world applications.',
      'Delivered comprehensive courses in JavaScript and web development, covering HTML, CSS, and modern JavaScript frameworks.',
      'Instructed data science concepts, including data analysis, visualization, and machine learning fundamentals.',
      'Continuously updating course materials to reflect emerging technologies and industry best practices.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Bushel Technologies Pvt Ltd',
    location: 'Remote',
    duration: 'June 2022 – Present',
    responsibilities: [
      'Pioneered punchout integration of the eCommerce platform with multiple procurement systems, including Ariba and GEP Smart, streamlining client purchase processes and handling approximately 1,000 orders daily.',
      'Engineered a robust two-service system that identifies orders from procurement systems, generates detailed invoices, and transmits them to platforms like Ariba using cXML. This system processes thousands of invoices daily, significantly enhancing operational efficiency.',
      'Spearheaded the migration of data from a legacy system to ERP (Epicor P21) using Azure Data Factory (ADF), enabling seamless processing of thousands of records daily and ensuring data integrity.',
      'Developing a comprehensive ERP (Epicor P21) integration and a Construction Material Management System (CMMS) platform to optimize construction material inventory management.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Bushel Technologies Pvt Ltd',
    location: 'Remote',
    duration: 'Jan 2022 – June 2022',
    responsibilities: [
      'Designed, developed, deployed, and managed an OAuth application to authenticate and manage users in compliance with OAuth protocols, ensuring secure and efficient user authentication processes.',
    ],
  },
  {
    role: 'Data Entry Specialist',
    company: 'Lumberjacks Local',
    location: 'Remote',
    duration: 'Oct 2020 - Dec 2020',
    responsibilities: [
      'Gathered data on top builders in specific Canadian provinces and added it to Excel, managing a volume of roughly 1,000 entries per month.',
      'Developed a Python script to automate data extraction from various websites and populate Excel sheets, reducing manual workload.',
    ],
  },
];

const ExperienceCard: React.FC<{ exp: ExperienceType; index: number }> = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(false);

  // Show only the first two responsibilities by default.
  const responsibilitiesToShow = expanded ? exp.responsibilities : exp.responsibilities.slice(0, 2);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        rotateX: 2,
        rotateY: 2,
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
      }}
      onClick={() => setExpanded(!expanded)}
      className="cursor-pointer bg-gradient-to-r from-[#1a1a1a] to-[#222222] border-l-4 border-cyan-500 p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Role */}
      <h3 className="text-2xl font-bold text-gray-100 mb-1">{exp.role}</h3>

      {/* Company, Location and Duration in a flex container */}
      <div className="flex justify-between items-center">
        <p className="text-gray-400">
          {exp.company} · {exp.location}
        </p>
        <p className="text-sm text-gray-500">{exp.duration}</p>
      </div>

      {/* Responsibilities */}
      <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
        {responsibilitiesToShow.map((task, i) => (
          <li key={i} className="leading-relaxed">
            {task}
          </li>
        ))}
        {!expanded && exp.responsibilities.length > 2 && (
          <li className="text-gray-500 italic">...Read more</li>
        )}
      </ul>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="text-gray-300 px-6 sm:px-12 py-16 max-w-4xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-100 text-center mb-12 border-b border-gray-700 pb-4">
        Experience
      </h2>

      {/* Experience Cards */}
      <div className="flex flex-col space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
