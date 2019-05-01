import React from 'react';
import { CartQuantityStyle } from './cartQuantity.style';

const CartQuantity = ({count}) => {
  return(
    <CartQuantityStyle>
      <p>-</p>
      <p>{count}</p>
      <p>+</p>
    </CartQuantityStyle>
  )
}

export default CartQuantity