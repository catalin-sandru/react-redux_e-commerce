import React, { Component } from 'react';
import {storeProducts} from '../../asset/data';
import Title from '../title/title.component';
import Products from '../products';
import { HomeStyle } from './home.style';


class Home extends Component {

  ProductList = () => {
    return(
      <HomeStyle className="products_wrapper">
        {storeProducts.map(({title, img, price, id}) => {
          return(
            <React.Fragment key={id}>
              <Products 
                title={title}
                img={img}
                price={price}
              />
            </React.Fragment>
          )
        })}
      </HomeStyle>
    )
  }
  
  render() {
    return(
      <div>
        <Title />
        {this.ProductList()}
      </div>
    )
  }
}

export default Home;