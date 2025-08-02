import { GraduationCap, School, Building2 } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-blue-100 via-blue-300 to-blue-900 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">Education & Qualifications</h2>

        <div className="relative max-w-3xl mx-auto before:absolute before:top-0 before:left-5 before:bottom-0 before:w-1 before:rounded-full before:bg-gradient-to-b from-indigo-400 via-green-400 to-yellow-400 before:animate-glow-line">
          
          {/* Graduation */}
          <div className="relative flex items-start mb-12 group">
            <div className="relative z-10 bg-indigo-500 p-3 rounded-full shadow-glow-indigo ml-0 mr-6">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-glow-indigo w-full">
              <h3 className="text-2xl font-semibold text-indigo-800">Bachelor of Technology</h3>
              <h3 className="text-gray-700">Information Technology</h3>
              <p className="text-indigo-600">Usha Rama College Of Engineering and Technology, Vijayawada.</p>
              <p className="text-blue-500">Jawaharlal Nehru Technological University, India.</p>
              <p className="text-sm text-gray-400">2017 - 2021</p>
            </div>
          </div>

          {/* Intermediate */}
          <div className="relative flex items-start mb-12 group">
            <div className="relative z-10 bg-green-500 p-3 rounded-full shadow-glow-green ml-0 mr-6">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="bg-white p-6 rounded-xl border border-green-200 shadow-glow-green w-full">
              <h3 className="text-2xl font-semibold text-green-800">Higher Secondary Education</h3>
              <p className="text-gray-600">Maths, Physics, Chemistry (MPC)</p>
              <p className="text-gray-500">Sree Mithra Junior College, India</p>
              <p className="text-sm text-gray-400">2015 - 2017</p>
            </div>
          </div>

          {/* School */}
          <div className="relative flex items-start group">
            <div className="relative z-10 bg-yellow-500 p-3 rounded-full shadow-glow-yellow ml-0 mr-6">
              <School className="w-6 h-6 text-white" />
            </div>
            <div className="bg-white p-6 rounded-xl border border-yellow-200 shadow-glow-yellow w-full">
              <h3 className="text-2xl font-semibold text-yellow-800">Matriculation</h3>
              <p className="text-gray-600">Secondary School Certificate (SSC)</p>
              <p className="text-gray-500">Nalanda High School, India</p>
              <p className="text-sm text-gray-400">2014 - 2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
