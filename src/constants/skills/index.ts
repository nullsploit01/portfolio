import { DiMsqlServer } from 'react-icons/di';
import { FaGit, FaGithub, FaHtml5 } from 'react-icons/fa';
import { FaDocker, FaGolang, FaNodeJs, FaPython } from 'react-icons/fa6';
import { IoLogoCss3, IoLogoFirebase, IoLogoJavascript, IoLogoReact } from 'react-icons/io5';
import { LiaNodeJs } from 'react-icons/lia';
import {
  SiDotnet,
  SiGooglecloud,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

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
  BACKEND: [
    {
      name: 'Node.js',
      icon: FaNodeJs,
    },
    {
      name: 'Express',
      icon: LiaNodeJs,
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
    },
    {
      name: 'GraphQL',
      icon: SiGraphql,
    },
    {
      name: 'Golang',
      icon: FaGolang,
    },
    {
      name: 'Python',
      icon: FaPython,
    },
    {
      name: 'C#',
      icon: TbBrandCSharp,
    },
    {
      name: 'DotNet',
      icon: SiDotnet,
    },
    {
      name: 'SQL Server',
      icon: DiMsqlServer,
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    },
  ],
  DEVOPS: [
    {
      name: 'Docker',
      icon: FaDocker,
    },
    {
      name: 'Git',
      icon: FaGit,
    },
    {
      name: 'GitHub',
      icon: FaGithub,
    },
    {
      name: 'Firebase',
      icon: IoLogoFirebase,
    },
    {
      name: 'Azure',
      icon: VscAzure,
    },
    {
      name: 'GCP',
      icon: SiGooglecloud,
    },
  ],
} as const;

export default skills;
