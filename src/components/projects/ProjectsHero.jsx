/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function ProjectsHero() {
  return (
    <section className="projects-hero">
      <div className="container">
        <motion.div
          className="projects-hero__content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">PROJECTS</span>

          <h1 className="projects-hero__title">
            Curated <span>Creations.</span>
          </h1>

          <p className="projects-hero__description">
            A selection of products, systems, and digital experiences I have
            designed or planned to solve real problems through thoughtful
            technology and clean execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsHero;