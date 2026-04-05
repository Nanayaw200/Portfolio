/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function TestimonialCard({ quote, name, role }) {
  return (
    <motion.aside
      className="testimonial-card"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="testimonial-card__stars">★★★★★</div>
      <p className="testimonial-card__quote">“{quote}”</p>
      <div className="testimonial-card__author">
        <h3 className="testimonial-card__name">{name}</h3>
        <p className="testimonial-card__role">{role}</p>
      </div>
    </motion.aside>
  );
}

export default TestimonialCard;