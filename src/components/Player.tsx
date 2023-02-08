import { styled } from '../styles';

const Container = styled('div', {
  flex: 1,
});

const Iframe = styled('iframe', {
  height: 470,
  width: '100%',

  // "@bp2": {
  //   maxHeight: 160,
  //   width: "100%",
  // },
});

const Title = styled('h1', {
  fontFamily: '$rubik',
  fontSize: '$4xl',
  fontWeight: '$medium',
  color: '$secondary',
  marginBottom: '$9',

  '@bp1': {
    fontSize: '$xs',
  },
});

type PlayerProps = {
  title: string;
  image: string;
  source: string;
};

export function Player({ title, image, source, ...props }: PlayerProps) {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Iframe
        src={source}
        frameBorder="0"
        css={{
          backgroundImage: `linear-gradient(0deg, rgba(21, 27, 38, 0.4), rgba(21, 27, 38, 0.4), url(${image})`,
        }}
      >
        {image}
      </Iframe>
    </Container>
  );
}
