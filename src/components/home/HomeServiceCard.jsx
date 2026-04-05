/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function HomeServiceCard({ title, description, icon, delay = 0 }) {
  return (
    <motion.article
      className="home-service-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -8 }}
    >
      <div className="home-service-card__icon">{icon}</div>
      <h3 className="home-service-card__title">{title}</h3>
      <p className="home-service-card__description">{description}</p>
    </motion.article>
  );
}

export default HomeServiceCard;