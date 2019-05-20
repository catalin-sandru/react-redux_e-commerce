import React from 'react'
import { ButtonStyle } from './button.style';

export const Button = ({icon, buttonText, clearCart, cart}) => {
  return(
    <ButtonStyle onClick={clearCart} cart={cart}>
      {icon} 
      <p>{buttonText}</p>
    </ButtonStyle>
  )
}

export default Button