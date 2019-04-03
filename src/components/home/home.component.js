import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../title/title.component';
import Products from '../products';
import { HomeStyle } from './home.style';
import { initActionList } from './home.action';


class Home extends Component {
  ProductList = () => {
    return(
      <HomeStyle>
        {this.props.initList.map(({title, img, price, id}) => {
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

const mapStateToProps = state => ({initList: state.InitListReducer})
console.log(mapStateToProps)
const mapDispachToProps = dispach => ({
  getList: list => dispach(initActionList(list))
}) 

export default connect(mapStateToProps, mapDispachToProps)(Home);