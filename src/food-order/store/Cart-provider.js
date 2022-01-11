import React, {useReducer} from 'react';
import CartContext from './Cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const updatesItems = state.items.concat(action.item)
            const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
            return {
                items: updatesItems,
                totalAmount: updatedTotalAmount
            }
    
        default:
            return defaultCartState;

    }
}

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCart({type: 'ADD', item});
    }
    const removeItemFromCartHandler = id => {
        dispatchCart({type: 'REMOVE', id});
    }
    const cartContext = {
        items:[],
        totalAmount: 0,
        addItem : addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
