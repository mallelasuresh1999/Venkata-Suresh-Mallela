import {
  ChevronDown,
  Code,
  Terminal,
  Cloud,
  Server,
  Database,
  GitBranch,
  GitCommit,
  Github,
} from 'lucide-react';

const floatingIcons = [Code, Terminal, Cloud, Server, Database];
const devOpsIcons = [GitBranch, Github,GitCommit];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#231f60] via-[#1a1528] to-[rgb(17,24,39)] text-white flex flex-row items-center justify-center px-6 py-16 overflow-hidden">

      {/* Floating Lucide Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${index * 0.5}s`,
              transform: `scale(${0.8 + Math.random() * 0.4})`,
            }}
          >
            <Icon className="w-6 h-6 text-blue-400 opacity-20" />
          </div>
        ))}

        {/* DevOps tool icons faint behind text */}
        {devOpsIcons.map((Icon, idx) => (
          <div
            key={idx}
            className="absolute text-white opacity-10"
            style={{
              top: `${15 + idx * 15}%`,
              left: `${20 + idx * 12}%`,
              width: '35px',
              height: '35px',
              pointerEvents: 'none',
              filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.1))',
            }}
          >
            <Icon className="w-full h-full" />
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="max-w-xl z-10 mr-auto ml-12" style={{ flexBasis: '60%' }}>
        <h1 className="whitespace-nowrap text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Venkata Suresh Mallela
        </h1>

        <p className="text-blue-300 text-lg max-w-xl mb-6 drop-shadow-md">
          DevOps Engineer focused on automation, infrastructure, and scalable cloud platforms.
        </p>

        <a
          href="#skills"
          className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-semibold text-lg shadow-md transition"
        >
          Know My work→
        </a>
      </div>

      {/* Glowing VM Avatar on Right */}
      <div
        className="relative z-10 animate-float w-32 h-32 flex-shrink-0 ml-auto"
        style={{ flexBasis: '20%' }}
      >
        {/* Outer Ring Glow */}
        <div className="absolute inset-0 rounded-full border-[6px] border-gradient-to-tr from-red-400 via-blue-500 to-green-400 animate-gradient-spin blur-md opacity-50"></div>

        {/* Inner Circle */}
        <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center font-bold text-white text-4xl z-10 shadow-xl border-4 border-white">
          VM
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-blue-300 text-sm text-center z-10">
        <p>Scroll down</p>
        <ChevronDown className="mx-auto w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
