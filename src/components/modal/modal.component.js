import React from 'react';
import { connect } from 'react-redux';
import { ModalStyle } from './modal.style';
import Button from '../button/button.component';
import { Link } from 'react-router-dom'
import { CloseModalAction } from '../home/home.action'

const Modal = (props) => {

  const product = props.modalItem

  if(!product.length){
    return null;
  } else{
    return(
      <ModalStyle>
      {product.map(({title, id, img, price}) => {
        return(
          <div key={id}>
            <h3>Item added to the cart</h3>
            <img src={img} alt="productPicture"/>
            <h3>{title}</h3>
            <h4>Price: £{price}</h4>
            <Link to="/">
              <Button 
                className="button" 
                onClick={() => props.closeModal()}
              >
                <h4>Back to Products</h4>
              </Button>
            </Link>
            <Link to="/cart">
              <Button
                className="button"
                onClick={() => props.closeModal()}
                >
                <h4>Go To Cart</h4>
              </Button>
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