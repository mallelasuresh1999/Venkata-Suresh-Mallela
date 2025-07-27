const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-blue-200 via-blue-800 to-black text-white"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-5xl font-bold mb-9 italic">GET TO KNOW ME</h2>
          <p className="text-lg leading-relaxed mb-6 text-blue-100">
            I'm <strong>Venkata Suresh Mallela</strong>, a dedicated and
            detail-oriented <strong>DevOps Engineer</strong> with over 3.6+ years of
            experience. I help teams and businesses build, automate, and scale their
            infrastructure using modern DevOps tools and practices like{" "}
            <strong>
              AWS, Terraform, Docker, Kubernetes, Ansible, Git, Maven, and Linux
            </strong>
            .
          </p>
          <p className="text-lg text-blue-200 mb-6">
            My mission is to simplify infrastructure, speed up deployments, and bring
            consistency to your cloud operations. I believe in automation, continuous
            improvement, and clean architecture.
          </p>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-block bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Contact me
          </a>

          {/* Contact Info */}
          <div className="mt-8 space-y-2 text-sm text-blue-200">
            <p>
              🔗{" "}
              <a
                href="https://linkedin.com/in/venkata-suresh-mallela/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Connect on LinkedIn
              </a>
            </p>
            <p>
              🐙{" "}
              <a
                href="https://github.com/mallelasuresh1999"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>

        {/* Right: Transparent + Glowing Image */}
        <div className="flex justify-center">
          <img
            src="mallelasuresh.png"
            alt="Venkata Suresh Mallela"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
