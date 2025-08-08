const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text and Info */}
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300 tracking-tight">
            Inside Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-5">
            I'm <strong className="text-white">Venkata Suresh Mallela</strong>, a
            passionate <strong className="text-white">DevOps Engineer</strong> with over{" "}
            <span className="text-cyan-400">3.6+ years</span> of experience helping
            teams scale, secure, and automate their infrastructure.
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-5">
            I specialize in tools like{" "}
            <strong className="text-white">
              AWS, Terraform, Kubernetes, Docker, Git, Linux
            </strong>{" "}
            and more — building robust CI/CD pipelines and improving developer
            efficiency across teams.
          </p>
          <p className="text-base text-gray-400 mb-6">
            I thrive on clean architecture, automation, and operational excellence.
            Let’s build something that lasts.
          </p>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-full font-medium hover:bg-cyan-300 transition-all duration-200"
          >
            Get in Touch
          </a>

          {/* Social Links */}
          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p>
              🔗{" "}
              <a
                href="https://linkedin.com/in/venkata-suresh-mallela/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 underline"
              >
                Connect on LinkedIn
              </a>
            </p>
            <p>
              🔗{" "}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 underline"
              >
                Explore GitHub
              </a>
            </p>
          </div>
        </div>

        {/* Right Side: Glowing Profile Image */}
        <div className="flex justify-center relative">
          <div className="glow-wrapper">
            <img
              src="mallelasuresh.png"
              alt="Venkata Suresh Mallela"
              className="w-96 h-100 object-cover rounded-xl border-4 border-white/20 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
