import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../title/title.component';
import Products from '../products';
import { HomeStyle } from './home.style';
import { HomeAction } from './home.action';

class Home extends Component {
  
  ProductList = () => {
    console.log(this.props)
    const products = this.props.initList

    return(
      <HomeStyle>
        {products.map(({title, img, price, id}) => {
          return(
          <React.Fragment key={id}>
            <Products
              id={id}
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

const mapStateToProps = state => ({initList: state.HomeReducer})

export default connect(mapStateToProps)(Home);