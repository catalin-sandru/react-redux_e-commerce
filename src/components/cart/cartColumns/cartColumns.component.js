import React from 'react'
import { CartColumnsStyle } from './cartColumns.style';
import { CartStyle } from '../cart.style';

const CartColumns = () => {
  return(
    <CartStyle>
      <h6>product</h6>
      <h6>name of item</h6>
      <h6>price</h6>
      <h6>quantity</h6>
      <h6>remove</h6>
      <h6>total</h6>
    </CartStyle>
  )
}

export default CartColumns