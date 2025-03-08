import ExperienceCard from '@/components/custom/experience-card';
import experiences from '@/constants/experience';

const Experience: React.FC = () => {
  return (
    <section className="text-gray-300 px-6 sm:px-12 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-100 text-center mb-12 border-b border-gray-700 pb-4">
        Experience
      </h2>
      <div className="flex flex-col space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
