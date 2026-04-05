/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function ServiceCard({ service, delay = 0 }) {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -8 }}
    >
      <div className="service-card__icon">{service.icon}</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>

      <div className="service-card__tags">
        {service.tags.map((tag) => (
          <span key={tag} className="service-card__tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default ServiceCard;