import React from 'react';
import { DetailsStyle } from './details.style';
import { connect } from 'react-redux';
import { Button } from '../button/button.component';
import { Link } from 'react-router-dom'
import { AddToCartAction, OpenModalAction } from '../home/home.action';

const Details = ({product, addToCart, openModal}) => {
  return(
    <DetailsStyle>
    {product.map(({title, info, img, id, company, price, inCart}) => {
        return(
          <div key={id} className="detailsWrapper">
            <h1>{title}</h1>
            <img src={img} alt="productPicture"/>
            <div>
              <h3>Model: {title}</h3>
              <h4>Made by: {company}</h4>
              <h4>Price: £{price}</h4>
              <strong>Some info about the product:</strong>
              <p>{info}</p>
              <div className="detailButton">
                <Link to="/">
                  <Button
                    buttonText="back to products"/>
                </Link>
                {inCart ? 
                  <Link to="/cart">
                    <Button
                      cart
                      buttonText="go to cart"/>
                  </Link> : 
                  <div onClick={() => {
                      addToCart(id)
                      openModal(id)}
                  }>
                    <Button
                      cart
                      buttonText="add to cart"/>
                  </div>
                  }
              </div>
            </div>
          </div>
        )
      })}
    </DetailsStyle>
  )
}

const mapStateToProps = state => ({product: state.DetailReducer});
const mapDispachToProps = dispach => ({
  addToCart: id => dispach(AddToCartAction(id)),
  openModal: id => dispach(OpenModalAction(id))
})
  
export default connect(mapStateToProps, mapDispachToProps)(Details);