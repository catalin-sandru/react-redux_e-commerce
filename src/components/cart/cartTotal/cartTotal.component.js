import React from 'react';
import Button from '../../button';
import { CartTotalStyle } from './cartTotal.style';

const CartTotal = ({cartItem, clearCart}) => {

  const totalHandler = () => {
    const product = 
      cartItem
        .map(item => item.total)
        .reduce((a, b) => a + b)
    return product
  }
  
  return(
    <CartTotalStyle>
      <h4>Cart Total: £{totalHandler()}</h4>
      <Button 
        clearCart={clearCart}
        buttonText="clear cart"/>
    </CartTotalStyle>
  )
}


export default CartTotal;
