/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function ProcessStep({ item, delay = 0 }) {
  return (
    <motion.div
      className="process-step"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="process-step__number">{item.step}</div>
      <div className="process-step__content">
        <h3 className="process-step__title">{item.title}</h3>
        <p className="process-step__description">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default ProcessStep;