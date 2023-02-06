import { styled } from "../styles";
import { Box } from "./Box";

const Container = styled("div", {
  display: "flex",
  padding: "$20 0",
  gap: "$10",
});

const Poster = styled("img", {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const Label = styled("h1", {
  fontFamily: "$rubik",
  fontWeight: "$medium",
  fontSize: "$xl",
  color: "$secondary",
});

const Description = styled("p", {
  fontFamily: "$inter",
  fontSize: "$lg",
  fontWeight: "$regular",
  color: "$quinary",
  lineHeight: "28px",
  textAlign: "justify",
});

const Information = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
});

const InformationSinopse = styled("div", {
  display: "flex",
  flexDirection: "column",
});
const BoxDescription = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "$3",
});

const BoxInformation = styled("div", {
  display: "flex",
  gap: "$2",
  // display: "flex",
  flexDirection: "column",
});
// type SectionAnimeDetailsProps = {
//   poster: string;
//   label: string;
//   description: string;
// };

export function SectionAnimeDetails({}) {
  return (
    <Container>
      <Poster src="/the.svg"></Poster>
      <BoxDescription>
        <BoxInformation>
          <Information>
            <Label>Duração : </Label>
            <Description>24min</Description>
          </Information>
          <Information>
            <Label>Estúdio :</Label>
            <Description>Trigger</Description>
          </Information>
          <Information>
            <Label>Gênero</Label>
            <Description>Drama, Ficção científica, Romance</Description>
          </Information>
        </BoxInformation>
        <InformationSinopse>
          <Label>Sinopse</Label>
          <Description css={{ marginTop: "$1" }}>
            Darling in the Franxx se passa em um futuro distópico e
            pós-apocalíptico onde os remanescentes da civilização humana
            abandonaram a superfície do planeta. Adultos e crianças existem em
            ambientes contrastantes entre si. Os adultos vivem em cidades
            tecnológicas (latifúndios) chamados de "plantações" (plantations).
            As crianças são chamadas de "parasitas", sendo elas destituídos de
            individualidade, e educadas apenas para pilotarem Franxxs em pares
            (um menino e uma menina) para defender a humanidade.{" "}
          </Description>
        </InformationSinopse>
      </BoxDescription>
    </Container>
  );
}
