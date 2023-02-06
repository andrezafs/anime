import { styled } from "../styles";
import { ReactNode } from "react";

const Container = styled("div", {
  display: "grid",
  // gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "$12 $5",
});

type AnimeListProps = {
  children: ReactNode;
};
export function AnimeList({ children }: AnimeListProps) {
  return <Container>{children}</Container>;
}
