import React from 'react';
import { connect } from 'react-redux';
import { ModalStyle } from './modal.style';
import Button from '../button';
import { Link } from 'react-router-dom'
import { CloseModalAction } from '../home/home.action'

const Modal = ({modalItem, closeModal}) => {

  if(!modalItem.length){
    return null;
  } else{
    return(
      <ModalStyle>
      {modalItem.map(({title, id, img, price}) => {
        return(
          <div className="modal" key={id}>
            <h3>Item added to the cart</h3>
            <img src={img} alt="productPicture"/>
            <h3>{title}</h3>
            <h4>Price: £{price}</h4>
            <Link to="/">
              <div onClick={closeModal}>
                <Button 
                  buttonText="back to products"
                  className="button" 
                  />
              </div>
            </Link>
            <Link to="/cart">
              <div onClick={closeModal}>
                <Button
                  cart
                  buttonText="go to cart"
                  className="button"
                  />
              </div>
            </Link>
          </div>
        )
      })}
    </ModalStyle>
  )
}
}

const mapStateToProps = state => ({modalItem: state.ModalReducer})
const mapDispachToProps = dispach => ({
  closeModal: () => dispach(CloseModalAction())
})

export default connect(mapStateToProps, mapDispachToProps)(Modal)