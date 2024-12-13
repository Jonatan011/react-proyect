import "./App.css";
import Header from "./components/Header/Header";
import "./components/TabButton/TabButton.css";
import CoreConceptsSection from "./components/CoreConceptsSection/CoreConceptsSection";
import ExampleSection from "./components/ExampleSections/ExampleSection";

function App() {
  return (
    <>
      <Header />
      <CoreConceptsSection />
      <ExampleSection/>
    </>
  );
}

export default App;
