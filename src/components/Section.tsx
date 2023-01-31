import { styled } from "../styles";
import { Box } from "./Box";

const Container = styled("section", {
  padding: "$20 0",
});

const Title = styled("h1", {
  fontFamily: "$rubik",
  fontSize: "$4xl",
  fontWeight: "$normal",
  color: "$secondary",
});

const SubTitle = styled("h2", {
  fontFamily: "$rubik",
  fontSize: "$2xl",
  fontWeight: "$normal",
  color: "$quinary",
  marginTop: "$2",
});

export function Section({ title, subtitle, children, ...props }) {
  return (
    <Container {...props}>
      <Box>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Box>
      {children}
    </Container>
  );
}
