import React from 'react';
import { DetailsStyle } from './details.style';
import { connect } from 'react-redux';
import { DetailReducer, HomeReducer } from '../home/home.reducer';

const Details = (props) => {
  console.log(props)
  const product = props.item
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

const mapStateToProps = state => ({item: state.DetailReducer})
const mapDispachToProps = dispach => ({
  getItemDetails: id => dispach(HomeReducer(id))
})
  
export default connect(mapStateToProps, mapDispachToProps)(Details);