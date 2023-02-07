import { styled } from "../styles";
import { Box } from "./Box";
import { ReactNode } from "react";

const Container = styled("section", {
  padding: "$10 0",
});

const Title = styled("h1", {
  fontFamily: "$rubik",
  fontSize: "$4xl",
  fontWeight: "$normal",
  color: "$secondary",
  marginBottom: "$10",

  "@bp2": {
    fontSize: "$base",
  },
});

const SubTitle = styled("h2", {
  fontFamily: "$rubik",
  fontSize: "$2xl",
  fontWeight: "$normal",
  color: "$quinary",
  marginTop: "$2",

  "@bp2": {
    fontSize: "$sm",
  },
});

type SectionProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function Section({ title, subtitle, children, ...props }: SectionProps) {
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
