import React, { Component } from 'react';
import 'shoelace-css/dist/shoelace.css';
import '../styles/App.css';

import FilterProducts from './FilterProducts'
import Footer from '../components/Footer'
import ProductList from './ProductList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterProducts />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default App;
