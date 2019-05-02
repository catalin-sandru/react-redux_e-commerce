import React from 'react'
import { ButtonStyle } from './button.style';

export const Button = ({buttonText, icon, onClick}) => {
  return(
    <ButtonStyle onClick={onClick}>
      {icon}
      <p>{buttonText}</p>
    </ButtonStyle>
  )
}

export default Button