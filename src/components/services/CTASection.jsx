/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CTASection() {
  return (
    <section className="services-cta">
      <div className="container">
        <motion.div
          className="services-cta__card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">READY TO BUILD?</span>
          <h2 className="services-cta__title">
            Let’s Create Something <span>Exceptional.</span>
          </h2>
          <p className="services-cta__description">
            Whether you need a polished portfolio, a product foundation, or a
            scalable web platform, I can help bring it to life.
          </p>

          <div className="services-cta__actions">
            <Link to="/contact" className="primary-btn">
              Request a Service
            </Link>
            <Link to="/projects" className="secondary-btn">
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;