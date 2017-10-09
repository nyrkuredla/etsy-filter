import React, {Component} from 'react';

class Product extends Component {
    render() {
        const product = this.props;
        return (
            <li>
              <img src={product.image}></img>
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
            </li>
        )
    }
}

//map state to props; products from props will populate product component

export default Product;
