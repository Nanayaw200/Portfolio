// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import siteContent from "../../data/siteContent";

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">
        <motion.div
          className="contact-hero__content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">REQUEST A SERVICE</span>
          <h1 className="contact-hero__title">
            Let’s Turn Your <span>Vision</span> into <span>Digital Gold.</span>
          </h1>
          <p className="contact-hero__description">
            {siteContent.contact.intro}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;