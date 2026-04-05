import processSteps from "../../data/processSteps";
import ProcessStep from "./ProcessStep";

function ProcessSection() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="process-section__header">
          <span className="eyebrow">PROCESS</span>
          <h2 className="process-section__title">
            How I Turn Ideas Into <span>Impact.</span>
          </h2>
          <p className="process-section__description">
            A simple but effective process that keeps the work clear, focused,
            and aligned from start to finish.
          </p>
        </div>

        <div className="process-section__list">
          {processSteps.map((item, index) => (
            <ProcessStep key={item.id} item={item} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;