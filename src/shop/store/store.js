import {createStore} from "redux";
import { TOGGLE_CART } from "./ActionTypes";
const initialState = {
    isChartVisible: false,
    itemList: [
        {id: 1, name: 'name 1', price: 2, description: 'Lorem ipsum'},
        {id: 2, name: 'name 2', price: 6, description: 'Lorem ipsum'},
        {id: 3, name: 'name 3', price: 3, description: 'Lorem ipsum'},
        {id: 4, name: 'name 4', price: 77, description: 'Lorem ipsum'},
    ]
};

const cartReducer = (state = initialState, action) => {
    if(action.type === TOGGLE_CART) state = {
        itemList: state.itemList.filter(item => true),
        isChartVisible: !state.isChartVisible
    }
    return state;
}

const store = createStore(cartReducer);

export default store;