import React from 'react';
import { CartQuantityStyle } from './cartQuantity.style';

const CartQuantity = ({count, increment, decrement}) => {
  return(
    <CartQuantityStyle>
      <p onClick={decrement}>-</p>
      <p>{count}</p>
      <p onClick={increment}>+</p>
    </CartQuantityStyle>
  )
}

export default CartQuantity