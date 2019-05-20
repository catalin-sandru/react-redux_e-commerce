import React from 'react';
import { ProductWrapper } from './products.style';
import { AddToCartIcon } from '../../asset/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DetailAction, OpenModalAction, AddToCartAction } from '../home/home.action';

const Products = ({title, img, price, id, getProductDetails, openModal, addToCart, inCart}) => {
  return (
    <ProductWrapper>
      <div className="img_holder">
        <Link to="/details">
          <img 
            src={img} alt="product_image" 
            onClick={() => getProductDetails(id)}
          />
        </Link>
        <button
          disabled={inCart ? true : false}
          className="cart_icon_hov" 
          onClick={() => {
            openModal(id)
            addToCart(id)
          }}
        >
        {inCart ? (<p disabled>In Cart</p>) : (<AddToCartIcon/>)}
        </button>
      </div>
      <div className="prod_description">
        <h3>{title}</h3>
        <h3>£: {price}</h3>
      </div>
    </ProductWrapper>
  )
}

const mapStateToProps = state => ({products: state.DetailReducer})
const mapDispachToProps = dispach => ({
  getProductDetails: id => dispach(DetailAction(id)),
  openModal: id => dispach(OpenModalAction(id)),
  addToCart: id => dispach(AddToCartAction(id))
})

 export default connect(mapStateToProps, mapDispachToProps)(Products);