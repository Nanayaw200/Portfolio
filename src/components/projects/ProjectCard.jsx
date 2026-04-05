// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project, delay = 0, variant = "default" }) {
  return (
    <motion.article
      className={`project-card project-card--${variant}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6 }}
    >
      <Link to={`/projects/${project.slug}`} className="project-card__link">
        <div className="project-card__image-wrap">
          {project.type === "video" ? (
            <video
              src={project.media}
              className="project-card__video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={project.media}
              alt={project.title}
              className="project-card__image"
            />
          )}
        </div>

        <div className="project-card__body">
          <span className="project-card__category">{project.category}</span>

          <h3 className="project-card__title">{project.title}</h3>

          <p className="project-card__description">{project.description}</p>

          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default ProjectCard;