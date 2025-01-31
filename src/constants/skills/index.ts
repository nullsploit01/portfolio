import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript, IoLogoReact } from 'react-icons/io5';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = {
  FRONTEND: [
    {
      name: 'HTML',
      icon: FaHtml5,
    },
    {
      name: 'CSS',
      icon: IoLogoCss3,
    },
    {
      name: 'JavaScript',
      icon: IoLogoJavascript,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
    },
    {
      name: 'React',
      icon: IoLogoReact,
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
  ],
  // BACKEND: [
  //   'Node.js',
  //   'Express',
  //   'MongoDB',
  //   'GraphQL',
  //   'Golang',
  //   'Python',
  //   'C#',
  //   'DotNet',
  //   'SQL Server',
  //   'PostgreSQL',
  //   'MySQL',
  //   'Redis'
  // ],
  // DEVOPS: ['Docker', 'GCP', 'Azure', 'Git', 'GitHub', 'Firebase']
} as const;

export default skills;
