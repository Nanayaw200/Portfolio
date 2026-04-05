// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AnimatedBlur({ className = "" }) {
  return (
    <motion.div
      className={`animated-blur ${className}`}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default AnimatedBlur;