import styled from 'styled-components'

export const CartStyle = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  grid-gap: 0.5rem;
  width: 100%;
  font-weight: bold;


  h6 {
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img{
      max-width: 30%;
    
    }
    h6 {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);

    /* .cart-total {
      display: flex;
      flex-direction: column;
      right: 2rem;
      position: absolute;
    } */

    img {
      max-width: 35%;
      height: auto;
      justify-self: center;
    }
  }
`