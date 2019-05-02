import React from 'react'
import { connect } from 'react-redux'
import Title from '../title';
import { CartStyle } from './cart.style';
import CartColumns from './cartColumns';
import CartQuantity from './cartQuantity';

const Cart = (props) => {

  const cartProduct = props.cartItem;

  if(!cartProduct.length) {
    return <Title title="your cart is empty"/>
  } else{
    return(
      <div>
        <Title title="your cart"/>
        <CartColumns />
        {cartProduct.map(({title, id, img, price, count}) => {
          return(
            <CartStyle key={id}>
              <img src={img} alt="ProducImage"/>
              <p>{title}</p>
              <p>£: {price}</p>
              <CartQuantity count={count}/>
              <i className="fas fa-times"/>
              <p>Item Total: £{price}</p>
            </CartStyle>
          )
        })}
      </div>
    )
  }
}
const mapStateToProps = state => ({cartItem: state.CartReducer})

export default connect(mapStateToProps)(Cart)