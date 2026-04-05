import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function ProjectGrid() {
  const featuredWide = projects.find((project) => project.layout === "featured-wide");
  const featuredTall = projects.find((project) => project.layout === "featured-tall");
  const smallCard = projects.find((project) => project.layout === "small-card");
  const sideCard = projects.find((project) => project.layout === "small-card-side");

  return (
    <section className="project-grid-section">
      <div className="container">
        <div className="projects-editorial-grid">
          <div className="projects-editorial-grid__top-left">
            {featuredWide && (
              <ProjectCard
                project={featuredWide}
                variant="featured-wide"
                delay={0}
              />
            )}
          </div>

          <div className="projects-editorial-grid__top-right">
            {featuredTall && (
              <ProjectCard
                project={featuredTall}
                variant="featured-tall"
                delay={0.1}
              />
            )}
          </div>

          <div className="projects-editorial-grid__bottom-left">
            {smallCard && (
              <ProjectCard
                project={smallCard}
                variant="small"
                delay={0.15}
              />
            )}
          </div>

          <div className="projects-editorial-grid__bottom-right">
            {sideCard && (
              <div className="projects-side-combo">
                <ProjectCard
                  project={sideCard}
                  variant="small-side"
                  delay={0.2}
                />

                <motion.div
                  className="projects-side-visual"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.28 }}
                >
                  <div className="projects-side-visual__orb">3</div>
                  <span className="projects-side-visual__caption">
                    SAFE. SHARP. WORK.
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;