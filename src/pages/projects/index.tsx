import { useEffect, useState } from 'react';

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
    <div className="flex flex-wrap justify-center">
      {/* <div>
        <h3>Projects</h3>
      </div> */}

      {projects.length > 0 ? (
        projects.map((project) => {
          return (
            <div className="my-5">
              <ProjectCard key={project.id} project={project} />
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProjectsPage;
