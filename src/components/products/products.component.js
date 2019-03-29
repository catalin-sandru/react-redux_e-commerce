import React from 'react'
import { ProductWrapper } from './products.style';

const Products = ({title, img, price}) => {
  return (
    <ProductWrapper>
      <div className="img_holder">
        <img src={img} alt="product_image"/>
      </div>
      <div className="prod_description">
        <h4>{title}</h4>
        <h5>£: {price}</h5>
      </div>
    </ProductWrapper>
  )
}
 export default Products