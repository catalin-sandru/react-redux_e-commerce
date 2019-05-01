import styled from 'styled-components'

export const CartStyle = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  margin: 0;
  grid-gap: 0.5rem;
  width: 100%;
  font-weight: bold;

  h6 {
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    h6 {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    img {
      max-width: 80%;
      height: auto;
      justify-self: center;
    }
  }
`
