import {
  ChevronDown,
  Code,
  Terminal,
  Cloud,
  Server,
  Database,
  GitBranch,
  GitCommit,
} from "lucide-react";

const floatingIcons = [Code, Terminal, Cloud, Server, Database];
const devOpsIcons = [GitBranch, GitCommit];

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

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-blue-300 text-sm text-center z-10">
        <p>Scroll down</p>
        <ChevronDown className="mx-auto w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
