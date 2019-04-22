import React from 'react';
import { connect } from 'react-redux';
import { ModalStyle } from './modal.style';
import Button from '../button/button.component';

const Modal = (props) => {
  const product = [props.modalItem]
  return(
    <ModalStyle>
      {product.map(({title, id, img, price}) => {
        return(
          <div key={id}>
            <h3>Item added to the cart</h3>
            <img src={img} alt="productPicture"/>
            <h3>{title}</h3>
            <h4>Price: £{price}</h4>
            <Button>
              <h4>Back to Products</h4>
            </Button>
            <Button>
              <h4>Go To Cart</h4>
            </Button>
          </div>
        )
      })}
    </ModalStyle>
  )
}

const mapStateToProps = state => ({modalItem: state.GetItem})
// const mapDispachToProps = dispach => ({
//   getItem: () => dispach(SingleItem(id))
// })

export default connect(mapStateToProps)(Modal)