import MainLayout from "../layouts/MainLayout";
import ContactHero from "../components/contact/ContactHero";
import TestimonialCard from "../components/contact/TestimonialCard";
import ContactForm from "../components/contact/ContactForm";
import testimonials from "../data/testimonials";

function ContactPage() {
  const testimonial = testimonials[0];

  return (
    <MainLayout>
      <ContactHero />

      <section className="contact-section">
        <div className="container contact-section__grid">
          <TestimonialCard
            quote={testimonial.quote}
            name={testimonial.name}
            role={testimonial.role}
          />
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
}

export default ContactPage;