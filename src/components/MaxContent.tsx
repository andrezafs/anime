import { styled } from "../styles";
export const MaxContent = styled("div", {
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",

  "@bp2": {
    padding: "0 $10",
  },

  "@bp4": {
    padding: "0 $10",
  },
});
