// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const initialForm = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback({ type: "", message: "" });

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setFeedback({
        type: "error",
        message:
          "Email service is not configured yet. Add your EmailJS environment variables.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setFeedback({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setFormData(initialForm);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setFeedback({
        type: "error",
        message: "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    
    <motion.form
      ref={formRef}
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <input type="hidden" name="time" value={new Date().toLocaleString()} />
      <div className="contact-form__grid">
        <div className="contact-form__field">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="service">Service Needed</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="frontend-development">Frontend Development</option>
            <option value="portfolio-website">Portfolio Website</option>
            <option value="business-website">Business Website</option>
            <option value="system-design">System Design & Product Structuring</option>
            <option value="api-integration">API Integration</option>
          </select>
        </div>

        <div className="contact-form__field">
          <label htmlFor="budget">Budget Range</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Select budget</option>
            <option value="starter">Starter</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="custom">Let’s Discuss</option>
          </select>
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Tell me about your project idea, goals, and what you need built..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {feedback.message && (
        <div
          className={
            feedback.type === "success"
              ? "form-feedback form-feedback--success"
              : "form-feedback form-feedback--error"
          }
        >
          {feedback.message}
        </div>
      )}

      <button type="submit" className="primary-btn" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Request"}
      </button>
    </motion.form>
  );
}

export default ContactForm;