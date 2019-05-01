import React from 'react'
import { TitleStyle } from './title.style';

const Title = ({title}) => {
  return (
    <TitleStyle  className="title">
      <h1>{title}</h1>
    </TitleStyle>
  )
}

export default Title;
