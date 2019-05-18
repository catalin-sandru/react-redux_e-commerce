import React from 'react'
import { ButtonStyle } from './button.style';

export const Button = ({icon, buttonText, clearCart}) => {
  return(
    <ButtonStyle onClick={clearCart}>
      {icon} 
      <p>{buttonText}</p>
    </ButtonStyle>
  )
}

export default Button