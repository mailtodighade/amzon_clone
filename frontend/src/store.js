import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {ProductListReducer, ProductDetailReducer} from './reducer/ProductListReducer'
import {CartReducer} from './reducer/CartReducer';


const reducer = combineReducers({
  products: ProductListReducer, 
  productDetail: ProductDetailReducer, 
  cart: CartReducer
});


const cartFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItmes')) : []

const initialState = {cart: {
  cartItmes: cartFromStorage
}};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
