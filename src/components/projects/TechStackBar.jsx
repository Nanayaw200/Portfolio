// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const techItems = ["NEXT.JS", "PYTHON", "POSTGRES", "REACT", "LARAVEL", "NODE.JS"];

function TechStackBar() {
  return (
    <section className="tech-stack-bar">
      <div className="container">
        <motion.div
          className="tech-stack-bar__inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="tech-stack-bar__label">ENGINEERED WITH PRECISION</span>

          <div className="tech-stack-bar__list">
            {techItems.map((item) => (
              <span key={item} className="tech-stack-bar__item">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechStackBar;