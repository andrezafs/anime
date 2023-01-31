import { styled } from "../styles";

export const Scroll = styled("div", {
  display: "flex",
  gap: "$10",
  overflowX: "scroll",
  marginTop: "$14",
  "&::-webkit-scrollbar": {
    height: "$1",
    backgroundColor: "$quaternary",
    borderRadius: "$12",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$primary",
    borderRadius: "$12",
    border: "$1 solid $primary",
  },
});
