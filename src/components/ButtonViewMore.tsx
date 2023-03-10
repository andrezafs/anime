import { styled } from '../styles';

const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$2 $14',
  background: '$tertiary',
  color: '$secondary',
  border: 'none',
  fontFamily: '$inter',
  fontSize: '$lg',
  fontWeight: '$medium',
  margin: '0 auto',
  marginTop: '$12',
});

type buttonViewMoreProps = {
  children: string;
};
export function ButtonViewMore({ children, ...props }: buttonViewMoreProps) {
  return <Container {...props}>{children}</Container>;
}
