import styled from 'styled-components'

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: var(--bianca);
  border-radius: 1rem;

  &:hover {
    box-shadow: 0px 0px 9px 7px rgba(18,18,18,0.5);
    transition: all 0.5s;
  }


  .img_holder {
    text-align: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .cart_icon_hov {
      font-size: 1.7rem;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(100%, 100%);
      transition: 0.3s;
      background: var(--gold);
      border-top-left-radius: 0.6rem;
      border-bottom-left-radius: 0.6rem;

      &:hover {
        color: var(--gold);
        background: var(--woodsmoke);
      }
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