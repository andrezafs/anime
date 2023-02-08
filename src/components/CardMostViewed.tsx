import { styled } from '../styles';
import { Box } from './Box';

const Container = styled('div', {
  backgroundColor: '$quaternary',
  width: 291,
  height: 107,
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
});

const Title = styled('h1', {
  fontFamily: '$rubik',
  fontSize: '$lg',
  fontWeight: '$medium',
  color: '$secondary',
  marginBottom: '$3',
});

const Image = styled('svg', {
  width: 100,
  height: 107,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});
const Description = styled('p', {
  fontFamily: '$inter',
  fontSize: '$base',
  fontWeight: '$regular',
  color: '$quinary',
});

type CardMostViewedProps = {
  image: string;
  title: string;
  description: string;
};

export function CardMostViewed({
  image,
  title,
  description,
  ...props
}: CardMostViewedProps) {
  return (
    <Container {...props}>
      <Image css={{ backgroundImage: `url(${image})` }} />

      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Box>
    </Container>
  );
}
