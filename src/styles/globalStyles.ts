import type Stitches from "@stitches/react";

export const globalStyles: Record<string, Stitches.CSS> = {
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  html: {
    "--webkit-font-smoothing": "antialiased",
  },
  body: {
    backgroundColor: "$tertiary",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
  },
  button: {
    cursor: "pointer",
  },
};