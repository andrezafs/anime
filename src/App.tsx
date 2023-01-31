import { Header } from "./components/Header";

import { Tab, TabActive } from "./components/Tab";
import { MaxContent } from "./components/MaxContent";
import { Scroll } from "./components/Scroll";
import { Banner } from "./components/Banner";

import { Section } from "./components/Section";
import { CardAnime } from "./components/CardAnime";

import { Box } from "./components/Box";

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
          <Section
            title="Últimas novidades"
            subtitle="O que você vai assistir hoje?"
          >
            <Banner
              image="/banner.svg"
              css={{
                marginTop: "$10 ",
              }}
              title="ONE PUNCH MAN TERÁ 3 TEMPORADA"
              description="Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch Man, divulgou um comunicado confirmando a produção de uma terceira temporada da adaptação para o anime […]"
            />
          </Section>
          <Section title="Últimas atualizações" subtitle={""}>
            <Box
              css={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
              <CardAnime
                image="/the.svg"
                title="Nanatsu no Taizai"
                description="Episódio 24"
              ></CardAnime>
            </Box>
          </Section>
        </main>
      </MaxContent>
    </div>
  );
}

export default App;
