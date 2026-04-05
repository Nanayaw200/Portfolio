/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../../assets/images/hero/me.jpg";
import siteContent from "../../data/siteContent";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__tag">● {siteContent.hero.badge}</span>

          <h1 className="hero__title">
            {siteContent.hero.titleLine1}
            <br />
            <span>{siteContent.hero.titleLine2}</span>
          </h1>

          <p className="hero__description">
            {siteContent.hero.description}
          </p>

          <div className="hero__actions">
            <Link to={siteContent.hero.primaryButtonLink} className="primary-btn">
              {siteContent.hero.primaryButtonText}
            </Link>

            <Link to={siteContent.hero.secondaryButtonLink} className="secondary-btn">
              {siteContent.hero.secondaryButtonText}
            </Link>
          </div>
        </div>

        <motion.div
          className="hero__card"
          initial={{ opacity: 0, y: 40, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -8, rotate: 6, scale: 1.02 }}
        >
          <div className="hero__card-inner">
            <img src={profile} alt={siteContent.about.name} className="hero__portrait" />

            <div className="hero__status-badge">
              <span className="hero__status-code">{siteContent.hero.statusTag}</span>
              <p className="hero__status-text">{siteContent.hero.statusText}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;