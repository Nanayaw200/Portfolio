import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project, delay = 0, variant = "default" }) {
  const hasLiveLink = project.liveLink && project.liveLink !== "#";
  const shouldReduceMotion = useReducedMotion();
  const MotionArticle = motion.article;

  return (
    <MotionArticle
      className={`project-card project-card--${variant}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.55, delay: shouldReduceMotion ? 0 : delay }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
    >
      <div className="project-card__content">
        <Link
          to={`/projects/${project.slug}`}
          className="project-card__image-wrap"
          aria-label={`View ${project.title} project details`}
        >
          {project.type === "video" ? (
            <video
              src={project.media}
              className="project-card__video"
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
            />
          ) : (
            <img
              src={project.media}
              alt={project.title}
              className="project-card__image"
              loading="lazy"
              decoding="async"
            />
          )}
        </Link>

        <div className="project-card__body">
          <span className="project-card__category">{project.category}</span>

          <Link to={`/projects/${project.slug}`} className="project-card__title-link">
            <h3 className="project-card__title">{project.title}</h3>
          </Link>

          <p className="project-card__description">{project.description}</p>

          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>

          {hasLiveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="project-card__live-link"
            >
              View live site <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-card__live-link project-card__live-link--disabled">
              Live site unavailable
            </span>
          )}
        </div>
      </div>
    </MotionArticle>
  );
}

export default ProjectCard;