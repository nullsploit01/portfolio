import { useEffect, useState } from 'react';

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
      <h1>Projects</h1>
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <small>Published on: {new Date(project.publishedAt).toLocaleDateString()}</small>
            <img width={300} height={400} src={project.image ?? ''} alt="image" />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProjectsPage;
