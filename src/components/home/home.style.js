import styled from 'styled-components';

export const HomeStyle = styled.div`
display: grid;
grid-gap: 1rem;
/* grid-template-columns: auto auto auto auto; */

@media (min-width: 768px) {
  grid-template-columns: repeat(2, auto)
}
@media (min-width: 1024px) {
  grid-template-columns: repeat(4, auto)
}

`