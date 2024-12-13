import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { topicsData } from "../../data/coreConceptsData";
import "./ExampleSection.css";
import Section from "../Sections/Sections";
import "./ExampleSection.css";
import TabsMenu from "../TabsMenu/TabsMenu";

function ExampleSection() {
  const [selectedTopic, setSelectedTopic] = useState(0);

  function handleClickMenu(selectButton: number) {
    setSelectedTopic(selectButton);
  }

  const currentTopic = topicsData.find((topic) => topic.id === selectedTopic);
  if (!currentTopic) {
    console.error(`No se encontró un tema con id ${selectedTopic}`);
  }

  const buttons = Object.values(topicsData).map((topic) => (
    <TabButton
      key={topic.id}
      className="tab-button"
      onClick={() => handleClickMenu(topic.id)}
    >
      {topic.title}
    </TabButton>
  ));

  const tabcontent = (
    <>
      {currentTopic ? (
        <div className="topic-content">
          <h3>{currentTopic.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: currentTopic.content }}></div>
        </div>
      ) : (
        <p>Seleccione un tema para ver su contenido.</p>
      )}
    </>
  );
  return (
    <Section title="Ejemplos React" id="exampleComponents">
      <TabsMenu ButtonContainer="menu" buttons={<>{buttons}</>}>
        {tabcontent}
      </TabsMenu>
    </Section>
  );
}

export default ExampleSection;
