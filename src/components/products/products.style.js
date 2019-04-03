import styled from 'styled-components'

export const ProductWrapper = styled.div`
  border: 1px solid black;
  display: grid;

  .img_holder {
    text-align: center;
    position: relative;
    border-bottom: 1px solid black;
    overflow: hidden;
    cursor: pointer;

    .cart_icon_hov {
      font-size: 1.7rem;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(100%, 100%);
      transition: 0.3s;
    }

    img {
      max-width: 70%;
      height: auto;
      padding: 1rem;
      transition: all 0.3s;
    }


    :hover img {
      transform: scale(1.2);
    }

    :hover .cart_icon_hov {
      transform: translate(0, 0);
      padding: 0.5rem;
    }
  }

  .prod_description {
    display: inline-flex;
    justify-content: space-between;
    margin: 1rem;
  }
`