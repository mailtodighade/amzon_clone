import axios from 'axios';
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from '../constants/ProductConst'

export const listProducts = () => async (dispatch) => {
    try {
    dispatch({type: PRODUCT_LIST_REQUEST, payload: null})
    const {data} = await axios.get('http://localhost:5000/api/v1/products');
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})         
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
};


export const productDetail = (id) =>  async (dispatch) => {
    try {
        dispatch({type: 'PRODUCT_DETAIL_REQUEST',  payload: null});
        let {data} = await axios.get(`http://localhost:5000/api/v1/products/${id}`);
        dispatch({type: 'PRODUCT_DETAIL_SUCCESS', payload: data})
    } catch (error) {
        dispatch({type: 'PRODUCT_DETAIL_FAIL', payload: error.message})
        
    }
}

