import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

import { IProject } from '@/models/project';

const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg p-5 flex gap-6 max-w-2xl transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="w-2/5 flex items-center justify-center relative">
        {project.image ? (
          <div className="relative">
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg object-cover w-full h-auto shadow-xl transition-all duration-300"
              style={{
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                transform: 'translateY(-5px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
          </div>
        ) : (
          <div className="bg-gray-700 rounded-lg w-full h-32 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      <div className="w-3/5">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-gray-400 text-sm mt-2 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags?.split(',').map((tag, index) => (
            <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded-md">
              {tag.trim()}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
          )}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
            >
              <FaLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
