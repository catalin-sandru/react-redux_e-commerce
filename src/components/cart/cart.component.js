import React from 'react'
import { connect } from 'react-redux'
import Title from '../title/title.component';
import { CartStyle } from './cart.style';

const Cart = (props) => {
  console.log(props)
  const cartProduct = props.cartItem;
  if(!cartProduct.length) {
    return <Title title="your cart is empty"/>
  } else{
    return(
      <CartStyle>
        <Title title="your cart"/>
        {cartProduct.map(({title}) => {
          return(
            <div>
              <h1>{title}</h1>
            </div>
          )
        })}

      </CartStyle>
    )
  }
}
const mapStateToProps = state => ({cartItem: state.CartReducer})

export default connect(mapStateToProps)(Cart)