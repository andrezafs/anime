import { styled } from '../styles';

const Container = styled('footer', {
  textAlign: 'center',
  padding: '$12 0',
});

const Description = styled('span', {
  fontFamily: '$inter',
  fontSize: '$lg',
  fontWeight: '$normal',
  color: '$quinary',
  '@bp2': {
    fontSize: '$sm',
  },
});

type footerProps = {
  description: string;
};

export function Footer({ description, ...props }: footerProps) {
  return (
    <Container {...props}>
      <Description>{description}</Description>
    </Container>
  );
}
