import styled from 'styled-components';

export const HomeStyle = styled.div`
display: grid;
grid-gap: 1.2rem;
margin: 2rem 1rem 2rem 1rem;

@media (min-width: 768px) {
  grid-template-columns: repeat(2, auto);
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(4, auto);
}

`