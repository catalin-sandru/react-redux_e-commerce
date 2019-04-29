import React from 'react'
import { connect } from 'react-redux'

const Cart = (props) => {
  console.log(props)
  const cartProduct = props.cartItem;
  return(
    cartProduct.map(({title}) => {
      return(
        <div>
        <h1>{title}</h1>
      </div>
    )
  })
  )
}

const mapStateToProps = state => ({cartItem: state.CartReducer})

export default connect(mapStateToProps)(Cart);