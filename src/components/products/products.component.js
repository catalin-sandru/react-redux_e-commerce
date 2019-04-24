import React from 'react';
import { ProductWrapper } from './products.style';
import { AddToCartIcon } from '../../asset/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SingleItem, OpenModal } from './products.action'

const Products = ({title, img, price, getItem, id, openModal}) => {
  return (
    <ProductWrapper>
      <div className="img_holder">
        <Link to="/details">
          <img src={img} alt="product_image" onClick={() => getItem(id)}/>
        </Link>
        <div className="cart_icon_hov" onClick={() => getItem(id)}>
          <AddToCartIcon />
        </div>
      </div>
      <div className="prod_description">
        <h4>{title}</h4>
        <h4>£: {price}</h4>
      </div>
    </ProductWrapper>
  )
}

const mapStateToProps = state => ({products: state.HomeReducer})
const mapDispachToProps = dispach => ({
  getItem: id => dispach(SingleItem(id)),
  openModal: id => dispach(OpenModal(id))
})

 export default connect(mapStateToProps, mapDispachToProps)(Products);