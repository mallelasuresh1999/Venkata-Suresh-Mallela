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
} from "lucide-react";

const floatingIcons = [Code, Terminal, Cloud, Server, Database];
const devOpsIcons = [GitBranch, Github, GitCommit];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#231f60] via-[#1a1528] to-gray-900 text-white px-6 py-20 overflow-hidden flex flex-col md:flex-row items-center justify-center gap-10">
      
      {/* Floating Icons */}
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
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400 opacity-20" />
          </div>
        ))}

        {devOpsIcons.map((Icon, idx) => (
          <div
            key={idx}
            className="absolute opacity-10 text-white"
            style={{
              top: `${15 + idx * 15}%`,
              left: `${20 + idx * 12}%`,
              width: "30px",
              height: "30px",
              filter: "drop-shadow(0 0 2px rgba(255,255,255,0.1))",
              pointerEvents: "none",
            }}
          >
            <Icon className="w-full h-full" />
          </div>
        ))}
      </div>

      {/* Left Text Content */}
      <div className="z-10 text-center md:text-left max-w-2xl w-full md:w-3/5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Venkata Suresh Mallela
        </h1>
        <p className="text-blue-300 text-base sm:text-lg md:text-xl mb-6 drop-shadow-md">
          DevOps Engineer focused on automation, infrastructure, and scalable cloud platforms.
        </p>
        <a
          href="#skills"
          className="inline-block bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold text-base sm:text-lg shadow-md transition"
        >
          Know My work →
        </a>
      </div>

      {/* Avatar Right Side */}
      <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex-shrink-0">
        <div className="absolute inset-0 rounded-full border-[6px] border-gradient-to-tr from-red-400 via-blue-500 to-green-400 animate-gradient-spin blur-md opacity-50"></div>
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center font-bold text-white text-3xl sm:text-4xl shadow-xl border-4 border-white">
          VM
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-blue-300 text-sm text-center z-10">
        <p>Scroll down</p>
        <ChevronDown className="mx-auto w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
