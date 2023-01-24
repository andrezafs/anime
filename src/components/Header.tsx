import { styled } from "../styles";
import { MaxContent } from "./MaxContent";
import { Nav } from "./Nav";
import { Logo } from "./Logo";

const Container = styled("header", {
  pt: "$14",
  pb: "$14",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export function Header() {
  return (
    <MaxContent>
      <Container>
        <Logo />
        <Nav></Nav>
      </Container>
    </MaxContent>
  );
}
