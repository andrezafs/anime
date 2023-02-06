import { styled } from "../styles";
import { Box } from "./Box";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const BoxComments = styled("div", {
  display: "flex",
  padding: "$4 0",
  gap: "$8",
});
const Profile = styled("img", {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
});
const Name = styled("h1", {
  fontFamily: "$rubik",
  fontWeight: "$medium",
  fontSize: "$lg",
  color: "$secondary",
  marginBottom: "$3",
});
const Description = styled("p", {
  fontFamily: "$inter",
  fontWeight: "$normal",
  fontSize: "base",
  color: "$quinary",
});

export function CardComments() {
  return (
    <Container>
      <BoxComments
        css={{
          borderBottom: "1px solid $quaternary",
        }}
      >
        <Profile src="/the.svg"></Profile>
        <Box>
          <Name>Ana Júlia</Name>
          <Description>Episodio muito top, já voltou muito bom!</Description>
        </Box>
      </BoxComments>
      <BoxComments>
        <Profile src="/the.svg"></Profile>
        <Box>
          <Name>Ana Júlia</Name>
          <Description>Episodio muito top, já voltou muito bom!</Description>
        </Box>
      </BoxComments>
    </Container>
  );
}
