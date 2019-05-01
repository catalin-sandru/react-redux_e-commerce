import styled from 'styled-components'

export const CartColumnsStyle = styled.div`
  text-transform: uppercase;
  margin: 0 2rem 0 2rem;
  width: 100%;
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
  grid-gap: 0.5rem;

  img {
    max-width: 15%;
    height: auto;
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(6, auto)
  }
`