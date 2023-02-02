import React from "react";
import { Header } from "../components/Header";
import { MaxContent } from "../components/MaxContent";
import { Box } from "../components/Box";
import { Player } from "../components/Player";
import { CardMostViewed } from "../components/CardMostViewed";
import { AsideMostViewed } from "../components/AsideMostViewed";

export function AnimeDetails() {
  return (
    <div>
      <Header></Header>
      <main>
        <MaxContent>
          <Box
            as="section"
            css={{
              display: "flex",
              justifyContent: "space-between",
              padding: "$20 0",
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
        </MaxContent>
      </main>
    </div>
  );
}

export default AnimeDetails;
