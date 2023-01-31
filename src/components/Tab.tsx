import { styled } from "../styles";
import { ComponentProps } from "react";

const Container = styled("button", {
  backgroundColor: "transparent",
  padding: "$2 $10",
  borderRadius: "$9",
  border: "2px solid $quaternary",
  color: "$quinary",
  fontFamily: "$inter",
  fontSize: "$lg",
  marginBottom: "$7",
});

type boxFilterProps = ComponentProps<typeof Container> & { children: string };

export function Tab({ children, ...props }: boxFilterProps) {
  return <Container {...props}>{children}</Container>;
}

export function TabActive({ children, ...props }: boxFilterProps) {
  return (
    <Container
      {...props}
      css={{
        backgroundColor: "$quaternary",
        color: "$primary",
      }}
    >
      {children}
    </Container>
  );
}
