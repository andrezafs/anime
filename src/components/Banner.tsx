import { ComponentProps } from 'react';
import { styled } from '../styles';

import { Box } from './Box';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: 400,
  marginTop: '$10',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  '@bp1': {
    maxHeight: 164,
    padding: '$4 ',
  },
});

const Title = styled('h1', {
  fontFamily: '$rubik',
  fontSize: '$5xl',
  fontWeight: '$medium',
  color: '$secondary',
  textTransform: 'uppercase',
  marginBottom: '$4',

  '@bp2': {
    fontSize: '$sm',
  },
});

const Description = styled('p', {
  fontFamily: '$inter',
  fontSize: '$lg',
  fontWeight: '$normal',
  color: '$quinary',
  maxWidth: 570,
  '@bp2': {
    fontSize: '$xxs',
  },
});

type bannerProps = ComponentProps<typeof Container> & {
  title: string;
  description: string;
  image: string;
};

export function Banner({ title, description, image, ...props }: bannerProps) {
  return (
    <Container
      {...props}
      css={{
        backgroundImage: `linear-gradient(270deg, rgba(6, 9, 15, 0.32) 0%, rgba(6, 9, 15, 0.9) 100%), url(${image})`,
      }}
    >
      <Box
        css={{
          padding: '$10 $11',
        }}
      >
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Box>
    </Container>
  );
}
