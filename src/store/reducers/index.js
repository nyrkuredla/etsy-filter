import update from 'immutability-helper';
import {FILTER_PRODUCTS} from "../actions";
import products from '../../data/products';

// Define initial state object
// Make sure the state object contains the `products` array imported in this file
// The state will also require a property for the current state of filterable data
const initialState = {
  products: products,
}

// Finish writing the reducer for the `FILTER_PRODUCTS` action
// Provide the reducer function delration with the necessary parameters

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case FILTER_PRODUCTS:
      let filterSearch = products.filter((product) => {
        //guessing payload (filterType) goes here as the filter conditional
        if((product.price < 20) && (action.payload === 'underTwenty')) {
          return true
        }
        else if((product.price >= 20) && (action.payload === 'overTwenty')) {
          return true
        }
        else if((action.payload === 'all')) {
          return true
        }
        else {
          return false
        }
      })
      return {products: filterSearch};
    default:
      return state;
  }
}

export default reducer;
