import React from 'react';
import { ProductWrapper } from './products.style';
import { AddToCartIcon } from '../../asset/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Products = ({title, img, price, id}) => {
  return (
    <ProductWrapper>
      <div className="img_holder">
        <Link to="/details">
          <img src={img} alt="product_image" />
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

const mapStateToProps = state => ({products: state.HomeReducer})
// const mapDispachToProps = dispach => ({
//   getItem: id => dispach(SingleItem(id)),
//   closeModal: () => dispach(CloseModal())
// })

 export default connect(mapStateToProps)(Products);