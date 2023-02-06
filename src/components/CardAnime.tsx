import { styled } from "../styles";
import { Box } from "./Box";
import { useNavigate } from "react-router-dom";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "$6",
  height: 254,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "$3",
  textAlign: "center",
});

const Title = styled("h1", {
  fontFamily: "$rubik",
  fontSize: "$lg",
  fontWeight: "$normal",
  color: "$secondary",
  textAlign: "center",
  marginTop: "$4",
});

const Description = styled("p", {
  fontFamily: "$inter",
  fontSize: "$lg",
  fontWeight: "$medium",
  color: "$quinary",
});

export function CardAnime({}) {
  const navigate = useNavigate();

  return (
    <Box>
      <Container
        onClick={() => navigate("anime")}
        css={{
          backgroundImage: `linear-gradient(180deg, rgba(6, 9, 15, 0) 0%, #06090F 100%), url(${"/the.svg"})`,
        }}
      >
        <Description>Episódio 24</Description>
      </Container>

      <Title>Nanatsu no Taizai</Title>
    </Box>
  );
}
