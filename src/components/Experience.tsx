import { Briefcase, Calendar, MapPin } from 'lucide-react';

const roleTimeline = [
  {
    title: 'Software Engineer',
    duration: 'Jan 2025 - Present',
    location: 'Hyderabad, India',
    description: 'Continuing the role after returning from the Netherlands on-site assignment.',
  },
  {
    title: 'Software Engineer (On-site - KPN)',
    duration: 'Jul 2024 - Dec 2024',
    location: 'Amsterdam, Netherlands',
    description: 'Worked on-site at KPN via Tech Mahindra as part of a client engagement.',
  },
  {
    title: 'Software Engineer',
    duration: 'Jan 2023 - Jun 2024',
    location: 'Hyderabad, India',
    description: 'Promoted and relocated from Bangalore to Hyderabad.',
  },
  {
    title: 'Associate Software Engineer',
    duration: 'Dec 2021 - Dec 2022',
    location: 'Bangalore, India',
    description: 'Started career with Tech Mahindra as an Associate Software Engineer.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full opacity-10 blur-2xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16 drop-shadow-md">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-blue-500/30 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="text-blue-400 w-6 h-6" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Tech Mahindra</h3>
              <p className="text-sm text-gray-400">Dec 2021 - Present</p>
            </div>
          </div>

          <div className="border-l-2 border-blue-500 pl-6 mt-6 space-y-10">
            {roleTimeline.map((role, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <span className="absolute -left-[17px] top-2 w-4 h-4 bg-blue-400 rounded-full shadow-lg group-hover:scale-110 transition-transform" />

                <div className="bg-gray-900/70 p-4 rounded-xl shadow-md hover:shadow-lg hover:border-blue-400 border border-transparent transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h4 className="text-lg font-semibold text-white">{role.title}</h4>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {role.duration}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {role.location}
                  </div>
                  <p className="text-gray-300">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
