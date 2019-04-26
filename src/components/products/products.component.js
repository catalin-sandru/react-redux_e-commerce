import React from 'react';
import { ProductWrapper } from './products.style';
import { AddToCartIcon } from '../../asset/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DetailAction } from '../home/home.action';

const Products = ({title, img, price, id, getProductDetails}) => {
  return (
    <ProductWrapper>
      <div className="img_holder">
        <Link to="/details">
          <img 
            src={img} alt="product_image" 
            onClick={() => getProductDetails(id)}
          />
        </Link>
        <div className="cart_icon_hov" >
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

const mapStateToProps = state => ({products: state.DetailReducer})
const mapDispachToProps = dispach => ({
  getProductDetails: id => dispach(DetailAction(id)),
})

 export default connect(mapStateToProps, mapDispachToProps)(Products);