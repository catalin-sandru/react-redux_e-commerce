import styled from 'styled-components'

export const ProductWrapper = styled.div`
  border: 1px solid black;
  display: grid;

  .img_holder {
    text-align: center;

    img {
      max-width: 70%;
      height: auto;
    }
  }

  .prod_description {
    display: inline-flex;
    justify-content: space-between;
    margin: 1rem;
  }
`