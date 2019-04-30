import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../title/title.component';
import Products from '../products';
import { HomeStyle } from './home.style';

class Home extends Component {
  
  ProductList = () => {
    const products = this.props.initList

    return(
      <HomeStyle>
        {products.map(({title, img, price, id, inCart}) => {
          return(
          <React.Fragment key={id}>
            <Products
              id={id}
              title={title}
              img={img}
              price={price}
              inCart={inCart}
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
        <Title title="Our Products"/>
        {this.ProductList()}
      </div>
    )
  }
}

const mapStateToProps = state => ({initList: state.HomeReducer})

export default connect(mapStateToProps)(Home);