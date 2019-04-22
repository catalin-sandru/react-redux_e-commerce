import React from 'react';
import { DetailsStyle } from './details.style';
import { connect } from 'react-redux';

const Details = (props) => {
  const product = [props.item]
  return(
    <DetailsStyle>
      {product.map(({title, info, img, id}) => {
        return(
          <div key={id}>
            <h1>{title}</h1>
            <p>{info}</p>
            <img src={img} alt="productPicture"/>
          </div>
        )
      })}
    </DetailsStyle>
  )
}

const mapStateToProps = state => ({item: state.GetItem})
  
export default connect(mapStateToProps)(Details);