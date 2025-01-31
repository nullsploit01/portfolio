import React from 'react';
import { IconType } from 'react-icons';

interface TechBoxProps {
  icon: IconType;
  name: string;
}

const TechBox: React.FC<TechBoxProps> = ({ icon: Icon, name }) => {
  return (
    <div className="flex items-center space-x-3 px-6 py-3 border border-gray-700 rounded-md transition-all duration-200 transform hover:scale-105 hover:brightness-125 hover:shadow-lg hover:shadow-gray-700">
      <Icon className="w-6 h-6 text-white" />
      <span className="text-white font-semibold text-lg">{name}</span>
    </div>
  );
};

export default TechBox;
