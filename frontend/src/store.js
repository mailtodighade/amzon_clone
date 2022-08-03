import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {ProductListReducer, ProductDetailReducer} from './reducer/ProductListReducer'
import {cartReducer} from './reducer/CartReducer'


const reducer = combineReducers({
  products: ProductListReducer, 
  productDetail: ProductDetailReducer, 
  cart: cartReducer
});


const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  cart: {cartItems: cartItemsFromStorage}
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
