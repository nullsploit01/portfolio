import React from 'react';
import { IconType } from 'react-icons';

interface TechBoxProps {
  icon: IconType;
  name: string;
}

const TechBox: React.FC<TechBoxProps> = ({ icon: Icon, name }) => {
  return (
    <div className="flex items-center justify-center gap-3 bg-gray-900 rounded-lg w-full h-[50px] px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300">
      <Icon className="w-5 h-5 text-gray-300 flex-shrink-0" />
      <span className="text-gray-300 text-sm font-medium truncate min-w-0">{name}</span>
    </div>
  );
};

export default TechBox;
