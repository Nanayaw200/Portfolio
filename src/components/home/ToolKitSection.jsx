import HomeServiceCard from "./HomeServiceCard";

const toolkitItems = [
  {
    id: 1,
    icon: "⚛",
    title: "Scalable Web Ecosystems",
    description:
      "Building responsive, high-performance interfaces and solid frontend systems with modern React architecture.",
  },
  {
    id: 2,
    icon: "◈",
    title: "System Architecture",
    description:
      "Designing clean, maintainable structures that support growth, performance, and future expansion.",
  },
  {
    id: 3,
    icon: "✦",
    title: "API Integration",
    description:
      "Connecting platforms, services, and data sources into one smooth digital experience.",
  },
];

function ToolkitSection() {
  return (
    <section className="toolkit">
      <div className="container">
        <div className="toolkit__header">
          <span className="eyebrow">TOOLKIT</span>
          <h2 className="toolkit__title">
            My Expertise, Your <span>Advantage.</span>
          </h2>
          <p className="toolkit__description">
            I blend design thinking, frontend engineering, and scalable system
            planning to craft products that feel polished and perform well.
          </p>
        </div>

        <div className="toolkit__grid">
          {toolkitItems.map((item, index) => (
            <HomeServiceCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolkitSection;