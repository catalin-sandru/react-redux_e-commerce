import React from 'react'
import { ProductWrapper } from './products.style';
import { AddToCartIcon } from '../../asset/icons';

const Products = ({title, img, price}) => {
  return (
    <ProductWrapper>
      <div className="img_holder">
        <img src={img} alt="product_image"/>
        <div className="cart_icon_hov">
          <AddToCartIcon/>
        </div>
      </div>
      <div className="prod_description">
        <h4>{title}</h4>
        <h5>£: {price}</h5>
      </div>
    </ProductWrapper>
  )
}
 export default Products