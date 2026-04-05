/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="container">
        <motion.div
          className="services-hero__content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">SERVICES</span>
          <h1 className="services-hero__title">
            Turning Code into <span>Digital Gold.</span>
          </h1>
          <p className="services-hero__description">
            I create modern digital products, scalable interfaces, and strong
            technical foundations that help ideas become refined experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesHero;