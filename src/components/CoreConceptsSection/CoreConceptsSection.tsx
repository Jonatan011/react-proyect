import { coreConceptsData } from "../../data/coreConceptsData";
import CoreConcepts from "../CoreConcepts/CoreConcepts";
import "./CoreConceptsSection.css"

function CoreConceptsSection() {
  return (
    <section id="coreConcepts" className="core-concepts-section">
      <h2 className="section-title">Principales características</h2>
      <div className="core-concepts-container">
        {coreConceptsData.map((concept) => (
          <CoreConcepts
            key={concept.id}
            src={concept.src}
            title={concept.title}
            description={concept.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CoreConceptsSection;