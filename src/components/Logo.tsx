import { styled } from '../styles';

const Container = styled('a', {
  fontFamily: '$rubik',
  fontWeight: '$medium',
  color: '$primary',
  fontSize: '$4xl',
});

export function Logo() {
  return <Container href="#">Ani.me</Container>;
}
