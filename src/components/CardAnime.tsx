import { styled } from "../styles";
import { Box } from "./Box";

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

type animeCardProps = {
  title: string;
  description: string;
  image: string;
};

export function CardAnime({
  title,
  description,
  image,
  ...props
}: animeCardProps) {
  return (
    <Box
      css={{
        marginBottom: "$12",
      }}
    >
      <Container
        {...props}
        css={{
          backgroundImage: `linear-gradient(180deg, rgba(6, 9, 15, 0) 0%, #06090F 100%), url(${image})`,
        }}
      >
        <Description>{description}</Description>
      </Container>

      <Title>{title}</Title>
    </Box>
  );
}
