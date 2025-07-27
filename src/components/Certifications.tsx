import { Award, ExternalLink } from 'lucide-react';

const CertificationCard = ({ title, issuer, date }: { title: string; issuer: string; date: string }) => (
  <div className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 relative shadow-md shadow-blue-500/10">
    <div className="flex items-start gap-4 relative z-10">
      <div className="bg-blue-400/20 p-3 rounded-lg group-hover:bg-blue-400/30 transition-colors">
        <Award className="w-6 h-6 text-blue-400" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">{title}</h3>
        <p className="text-gray-300 text-sm mt-1">{issuer}</p>
        <p className="text-gray-400 text-sm mt-1">{date}</p>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-300 transition-colors" />
    </div>

    <div className="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
);

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'AWS',
      date: 'Issued: October 2023',
    },
    {
      title: 'AWS Cloud SysOps Administrator',
      issuer: 'AWS',
      date: 'Issued: June 2024',
    },
    {
      title: 'DevOps Engineer',
      issuer: 'Front Lines Media',
      date: 'Issued: July 2024',
    }
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-indigo-950 via-blue-900 to-blue-800 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-md">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
