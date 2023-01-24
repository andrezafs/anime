import { styled } from "../styles";

const NavBar = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "$14",
});

const NavList = styled("ul", {
  display: "flex",
  gap: "$12",
});

const NavItem = styled("a", {
  fontFamily: "$inter",
  fontSize: "$lg",
  color: "$secondary",
});

const NavSearch = styled("input", {
  fontFamily: "$inter",
  fontSize: "$lg",
  color: "$secondary",
  backgroundColor: "$quaternary",
  border: "none",
  borderRadius: "$9",
  py: "$2",
  px: "$6",

  "&::placeholder": {
    color: "$secondary",
  },
});

export function Nav() {
  return (
    <NavBar>
      <NavList>
        <li>
          <NavItem href="#">Início</NavItem>
        </li>
        <li>
          <NavItem href="#">Lista</NavItem>
        </li>
        <li>
          <NavItem href="#">Gêneros</NavItem>
        </li>
        <li>
          <NavItem href="#">Novos epsódios</NavItem>
        </li>
      </NavList>
      <NavSearch type="text" placeholder="Pesquisar" />
    </NavBar>
  );
}
