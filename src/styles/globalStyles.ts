import type Stitches from "@stitches/react";

export const globalStyles: Record<string, Stitches.CSS> = {
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    outline: "none",
  },
  html: {
    "--webkit-font-smoothing": "antialiased",
  },
  body: {
    backgroundColor: "$dark",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
  },
  button: {
    cursor: "pointer",
  },
  li: {
    listStyle: "none",
  },
};
