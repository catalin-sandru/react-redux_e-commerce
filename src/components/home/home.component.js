import React, { Component } from 'react';
import {storeProducts} from '../../asset/data';

const getItems = storeProducts.map((item) => {
  return {...item}
})
 console.log(getItems)

class Home extends Component {
  render() {
    return(
    <div >
      
    </div>
    )
  }
}

export default Home;