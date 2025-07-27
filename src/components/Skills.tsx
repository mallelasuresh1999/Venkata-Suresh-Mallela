import React from "react";

interface Skill {
  name: string;
  iconPath: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "AWS", iconPath: "aws.png"},
    { name: "Git", iconPath: "git.png"},
    { name: "GitHub", iconPath: "github.png"},
    { name: "Bitbucket", iconPath: "bitbucket.png"},
    { name: "Terraform", iconPath: " terraform.png"},
    { name: "Docker", iconPath: " docker.png"},
    { name: "Kubernetes", iconPath: " kubernetes.png"},
    { name: "Ansible", iconPath: " ansible.png"},
    { name: "Jenkins", iconPath: " jenkins.png"},
    { name: "Maven", iconPath: " maven.png"},
    { name: "PL/SQL", iconPath: " sql.png"},
    { name: "Python Basics", iconPath: " python.png"},
    { name: "HTML5", iconPath: " html.png"},
    { name: "CSS", iconPath: " css.png"},
    { name: "Linux", iconPath: " linux.png"},
    { name: "CRM", iconPath: " crm.png"},
    { name: "ServiceNow", iconPath: " servicenow.png"},
    { name: "Jira", iconPath: " jira.png"},
    { name: "Cloud Operations", iconPath: " cloud.png"},
    { name: "Communication", iconPath: " communication.png"},
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 text-center shadow-md"
            >
              <div className="w-16 h-16 mx-auto mb-3">
                <img src={skill.iconPath} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <div className="text-sm font-medium text-gray-200 group-hover:text-blue-400">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
