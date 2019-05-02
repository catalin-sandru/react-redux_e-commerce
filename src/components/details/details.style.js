import styled from 'styled-components';

export const DetailsStyle = styled.div`
max-width: 80%;
justify-self: center;

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;

  img {
    max-width: 70%;
  }
}

@media (max-width: 1024px) {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto)
}
`