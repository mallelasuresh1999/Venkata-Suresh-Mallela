interface Project {
  title: string;
  client: string;
  role: string;
  description: string;
  environment: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-meta">
        <strong>Client:</strong> {project.client} <br />
        <strong>Role:</strong> {project.role}
      </p>
      <p className="project-desc">{project.description}</p>
      <div className="tech-stack">
        {project.environment.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "KPN_NL_COM-D-4021_NGBSS_BOSS",
      client: "KPN",
      role: "Cloud CRM Engineer",
      description:
        "Managed CI/CD pipelines and infrastructure automation using Terraform. Deployed scalable Kubernetes clusters on AWS and maintained artifact management through Maven and Jenkins pipelines.",
      environment: [
        "AWS Cloud",
        "Git",
        "Maven",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
    },
    {
      title: "KPN_NL_COM-D-4021_NGBSS_BOSS",
      client: "KPN",
      role: "DevOps Engineer",
      description:
        "Designed and maintained build automation workflows using Jenkins and Docker. Improved infrastructure reliability with Terraform, supporting high-availability deployment strategies on AWS.",
      environment: [
        "AWS Cloud",
        "Git",
        "Maven",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
    },
    {
      title: "KPN_NL_COM-D-4021_B2C_OSS",
      client: "KPN",
      role: "DevOps Engineer",
      description:
        "Configured CI/CD for CRM modules, streamlined Git-based release workflows, and enhanced cluster security and auto-scaling using Kubernetes and Terraform on AWS.",
      environment: [
        "AWS Cloud",
        "Git",
        "Maven",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
