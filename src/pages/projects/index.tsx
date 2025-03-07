import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import NavBar from '@/components/custom/navbar';
import ProjectCard from '@/components/custom/project-card';
import { IProject } from '@/models/project';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await import('@/data/projects.json');
      data.default.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
      setProjects(data.default);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <NavBar />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl font-semibold text-gray-200 text-center mt-10 mb-6"
      >
        Projects I’ve Built
      </motion.h2>

      <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-[900px] mx-auto">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="w-full flex justify-center my-5">
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
