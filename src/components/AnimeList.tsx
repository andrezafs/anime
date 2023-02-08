import { ReactNode } from 'react';
import { styled } from '../styles';

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '$12 $5',

  '@bp1': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@bp2': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

type AnimeListProps = {
  children: ReactNode;
};
export function AnimeList({ children }: AnimeListProps) {
  return <Container>{children}</Container>;
}
