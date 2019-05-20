import styled from 'styled-components';

export const CartTotalStyle = styled.div`

  h5 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin: 3rem 0;
  }

  @media (min-width: 768px) {
    position: fixed;
    right: 1rem;
    margin-top: 1rem;
  }
`