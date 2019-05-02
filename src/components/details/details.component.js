import React from 'react';
import { DetailsStyle } from './details.style';
import { connect } from 'react-redux';
import { Button } from '../button/button.component';
import { Link } from 'react-router-dom'

const Details = (props) => {
  let details = props.item
  return(
    <DetailsStyle>
    {details.map(({title, info, img, id}) => { 
        return(
          <div key={id} className="detailsWrapper">
            <h1>{title}</h1>
            <img src={img} alt="productPicture"/>
            <p>{info}</p>
            <div className="detailButton">
              <Link to="/">
                <Button
                  buttonText="back to products"/>
              </Link>
              <Link to="/cart">
                <Button 
                  buttonText="go to cart"/>
              </Link>
            </div>
          </div>
        )
      })}
    </DetailsStyle>
  )
}

const mapStateToProps = state => ({item: state.DetailReducer})
  
export default connect(mapStateToProps)(Details);