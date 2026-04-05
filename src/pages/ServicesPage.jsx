import MainLayout from "../layouts/MainLayout";
import ServicesHero from "../components/services/ServiceHero";
import ServiceCard from "../components/services/ServiceCard";
import ProcessSection from "../components/services/ProcessSection";
import CTASection from "../components/services/CTASection";
import services from "../data/services";

function ServicesPage() {
  return (
    <MainLayout>
      <ServicesHero />

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </MainLayout>
  );
}

export default ServicesPage;