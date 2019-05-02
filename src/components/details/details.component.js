import React from 'react';
import { DetailsStyle } from './details.style';
import { connect } from 'react-redux';
import { Button } from '../button/button.component';

const Details = (props) => {
  let details = props.item
  return(
    <DetailsStyle>
    {details.map(({title, info, img, id}) => { 
        return(
          <div key={id}>
            <h1>{title}</h1>
            <p>{info}</p>
            <img src={img} alt="productPicture"/>
            <Button />
          </div>
        )
      })}
    </DetailsStyle>
  )
}

const mapStateToProps = state => ({item: state.DetailReducer})
  
export default connect(mapStateToProps)(Details);