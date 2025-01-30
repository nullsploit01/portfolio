import React from 'react';

interface TechBoxProps {
  icon: string;
  name: string;
}

const TechBox: React.FC<TechBoxProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center space-x-3 px-6 py-3 border border-gray-700 rounded-md transition-all duration-200 transform hover:scale-105 hover:brightness-125 hover:shadow-lg hover:shadow-gray-700">
      <img src={icon} alt={name} className="w-6 h-6" />
      <span className="text-white font-semibold text-lg">{name}</span>
    </div>
  );
};

export default TechBox;
