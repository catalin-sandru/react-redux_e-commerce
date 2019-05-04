import React from 'react'
import { ButtonStyle } from './button.style';

export const Button = ({icon, buttonText}) => {
  return(
    <ButtonStyle>
      {icon} 
      <p>{buttonText}</p>
    </ButtonStyle>
  )
}

export default Button