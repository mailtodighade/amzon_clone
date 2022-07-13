import {CART_ADD_ITEM, CART_REMOVE_ITEM}  from '../constants/cartConst';


export const CartReducer = (state = {cartItmes: []}, action) => {
    console.log(action, 'action from the reducer...')
    switch(action.type){
        case CART_ADD_ITEM : {
            const item = action.payload;
            const itemExist = state.cartItmes.find(el => el.product === item.proudct);
            if(itemExist){
                return {
                    ...state, 
                    cartItems: state.cartItmes.map(el => el.product === item.products ? item : el)
                }
            }else{
                return {
                    ...state, 
                    cartItmes: [...state.cartItmes, item]
                }
            }
            
        }

        default: return state
    }

} 
