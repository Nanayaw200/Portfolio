import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  return (
    <section className="project-grid-section">
      <div className="container">
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;