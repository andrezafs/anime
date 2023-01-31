import { Header } from "./components/Header";

import { Tab, TabActive } from "./components/Tab";
import { MaxContent } from "./components/MaxContent";
import { Scroll } from "./components/Scroll";
import { Banner } from "./components/Banner";

import { Section } from "./components/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <MaxContent>
        <main>
          <Scroll>
            <TabActive css={{ marginBottom: "$14" }}>Todos</TabActive>
            <Tab>A</Tab>
            <Tab>B</Tab>
            <Tab>C</Tab>
            <Tab>D</Tab>
            <Tab>E</Tab>
            <Tab>F</Tab>
            <Tab>G</Tab>
            <Tab>H</Tab>
            <Tab>I</Tab>
            <Tab>J</Tab>
            <Tab>K</Tab>
            <Tab>L</Tab>
            <Tab>M</Tab>
            <Tab>N</Tab>
            <Tab>O</Tab>
            <Tab>P</Tab>
            <Tab>Q</Tab>
            <Tab>R</Tab>
            <Tab>S</Tab>
            <Tab>T</Tab>
            <Tab>U</Tab>
            <Tab>V</Tab>
            <Tab>W</Tab>
            <Tab>X</Tab>
            <Tab>Y</Tab>
            <Tab>Z</Tab>
          </Scroll>
        </main>
      </MaxContent>
    </div>
  );
}

export default App;
