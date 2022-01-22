import {createStore} from "redux";
import { TOGGLE_CART } from "./ActionTypes";
const initialState = {
    isChartVisible: false
};

const cartReducer = (state = initialState, action) => {
    if(action.type === TOGGLE_CART) state = {isChartVisible: !state.isChartVisible}
    return state;
}

const store = createStore(cartReducer);

export default store;