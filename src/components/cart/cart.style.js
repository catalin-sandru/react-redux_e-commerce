import styled from 'styled-components'

export const CartStyle = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  margin: 0;
  grid-gap: 0.5rem;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, auto);
    img {
      max-width: 15%;
      height: auto;
    }
  }
`
