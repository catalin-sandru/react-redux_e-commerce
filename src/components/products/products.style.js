import styled from 'styled-components'

export const ProductWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

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
      background: red;
    }

    img {
      max-width: 80%;
      height: auto;
      padding: 3rem;
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
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`