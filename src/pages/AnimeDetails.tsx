import React from "react";
import { Header } from "../components/Header";
import { MaxContent } from "../components/MaxContent";
import { Box } from "../components/Box";
import { Player } from "../components/Player";
import { CardMostViewed } from "../components/CardMostViewed";
import { AsideMostViewed } from "../components/AsideMostViewed";
import { SectionAnimeDetails } from "../components/SectionAnimeDetails";
import { Section } from "../components/Section";
import { CardComments } from "../components/CardComments";
import { CardAnime } from "../components/CardAnime";
import { AnimeList } from "../components/AnimeList";
import { Footer } from "../components/Footer";
export function AnimeDetails() {
  return (
    <div>
      {/* <Header></Header> */}
      <main>
        <MaxContent>
          <Box
            as="section"
            css={{
              display: "flex",
              // justifyContent: "space-between",
              gap: "$5",
              padding: "$10 0",

              "@bp2": {
                flexDirection: "column",
              },
            }}
          >
            <Player
              title="Darling in the Franxx - Episódio 1"
              image="/the.svg"
              source="https://www.youtube.com/embed/1QlLM12qeUU"
            />

            <AsideMostViewed title="Mais Assistidos">
              <CardMostViewed
                image="/the.svg"
                title="Naruto Shippuden"
                description="2007"
              ></CardMostViewed>
              <CardMostViewed
                image="/the.svg"
                title="Naruto Shippuden"
                description="2007"
              ></CardMostViewed>
              <CardMostViewed
                image="/the.svg"
                title="Naruto Shippuden"
                description="2007"
              ></CardMostViewed>
              <CardMostViewed
                image="/the.svg"
                title="Naruto Shippuden"
                description="2007"
              ></CardMostViewed>
            </AsideMostViewed>
          </Box>

          <SectionAnimeDetails />
          <Section title="Comentários" subtitle="">
            <CardComments></CardComments>
            <CardComments></CardComments>
            <CardComments></CardComments>
          </Section>
          <Section title="Relacionados" subtitle="">
            <AnimeList>
              <CardAnime></CardAnime>
              <CardAnime></CardAnime>
              <CardAnime></CardAnime>
              <CardAnime></CardAnime>
              <CardAnime></CardAnime>
              <CardAnime></CardAnime>
            </AnimeList>
          </Section>
          <Footer description="Todos os direitos reservados aos criadores e produtores dos animes"></Footer>
        </MaxContent>
      </main>
    </div>
  );
}

export default AnimeDetails;
