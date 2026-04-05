import { useParams, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import projects from "../data/projects";

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <MainLayout>
        <section className="project-detail">
          <div className="container">
            <span className="eyebrow">PROJECT</span>
            <h1 className="project-detail__title">Project Not Found</h1>
            <p className="project-detail__intro">
              The project you are looking for does not exist.
            </p>
            <Link to="/projects" className="primary-btn">
              Back to Projects
            </Link>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="project-detail">
        <div className="container">
          <span className="eyebrow">{project.category}</span>

          <h1 className="project-detail__title">{project.title}</h1>

          <p className="project-detail__intro">{project.description}</p>

          <div className="project-detail__hero-image-wrap">
            {project.type === "video" ? (
              <video
                src={project.media}
                className="project-detail__hero-video"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            ) : (
              <img
                src={project.media}
                alt={project.title}
                className="project-detail__hero-image"
              />
            )}
          </div>

          <div className="project-detail__grid">
            <div className="project-detail__main">
              <div className="project-detail__section">
                <h2>Overview</h2>
                <p>{project.overview}</p>
              </div>

              <div className="project-detail__section">
                <h2>The Challenge</h2>
                <p>{project.challenge}</p>
              </div>

              <div className="project-detail__section">
                <h2>The Solution</h2>
                <p>{project.solution}</p>
              </div>
            </div>

            <aside className="project-detail__sidebar">
              <div className="project-detail__meta-card">
                <h3>My Role</h3>
                <p>{project.role}</p>
              </div>

              <div className="project-detail__meta-card">
                <h3>Tools & Focus</h3>
                <div className="project-detail__tools">
                  {project.tools.map((tool) => (
                    <span key={tool} className="project-detail__tool">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="project-detail__actions">
  <Link to="/projects" className="secondary-btn">
    Back to Projects
  </Link>

  {project.liveLink && project.liveLink !== "#" && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noreferrer"
      className="primary-btn"
    >
      Live Demo
    </a>
  )}

  {project.githubLink && project.githubLink !== "#" && (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noreferrer"
      className="secondary-btn"
    >
      GitHub
    </a>
  )}

  <Link to="/contact" className="primary-btn">
    Work With Me
  </Link>
</div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ProjectDetailPage;