import React, {Component} from 'react';
import {connect} from 'react-redux'

import Product from "../components/Product";

class ProductList extends Component {

    render() {
        const { products } = this.props;
        console.log('productssss', products);

        return (
            <ul className="ProductList">
              {products.map((product) => {
                return (
                  <Product
                    key={product.listing_id}
                    {...product}
                  />
                )
              })}
            </ul>
        );
    }
}

// Using the `mapStateToProps` function, filter the array stored in the
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
const mapStateToProps = function(state) {
  console.log('mappin state', state)
  let products = state.products;
  // let filteredProducts = state.filteredProducts;
  // console.log(state)
  //   if (product.price > 20) {
  //     underTwenty.push(product)
  //
  //   } else if () {
  //
  //   } else {
  //
  //   }
  // })
    return {products: products}
}

export default connect(mapStateToProps)(ProductList);
