import { styled } from "../styles";
import { Box } from "./Box";

const Container = styled("aside", {
  display: "flex",
  flexDirection: "column",
});

const Title = styled("h1", {
  fontFamily: "$rubik",
  fontWeight: "$regular",
  fontSize: "$4xl",
  color: "$quinary",
  marginBottom: "$9",
});

type AsideMostViewedProps = {
  title: string;
  children: React.ReactNode;
};

export function AsideMostViewed({
  title,
  children,
  ...props
}: AsideMostViewedProps) {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Box
        css={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "$3",
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
