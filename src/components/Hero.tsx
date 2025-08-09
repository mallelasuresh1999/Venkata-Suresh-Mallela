import { ChevronDown } from "lucide-react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";


const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#205c65] via-[#07011a] to-gray-900 text-white px-6 py-20 overflow-hidden flex flex-col md:flex-row items-center justify-center gap-10">

      {/* Left Content */}
      <div className="z-10 text-center md:text-left max-w-2xl w-full md:w-3/5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
          <span className="text-white-400 text-6xl">V</span>enkata Suresh <span className="text-yellow-400 text-6xl">M</span>allela
        </h1>
        <p className="text-white-300 text-base sm:text-lg md:text-xl mb-6 drop-shadow-md">
          <strong className="text-cyan-500">DevOps Engineer</strong> focused on automation, infrastructure, and scalable cloud platforms.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <a
            href="#skills"
            className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold text-base sm:text-lg shadow-md transition"
          >
            More About Me
          </a>
          <a
            href="" // Replace with your actual CV path
            download
            className="bg-gray-700 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-semibold text-base sm:text-lg shadow-md transition"
          >
            Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center md:justify-start text-2xl text-blue-300">
          <a href="https://wa.me/9550814819" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-green-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/venkata-suresh-mallela/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-white transition" />
          </a>
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
