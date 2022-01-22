import { createStore } from "redux";
import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART } from "./ActionTypes";
const initialState = {
  isChartVisible: true,
  itemList: [
    { id: 1, title: "name 1", price: 2, description: "Lorem ipsum" },
    { id: 2, title: "name 2", price: 6, description: "Lorem ipsum" },
    { id: 3, title: "name 3", price: 3, description: "Lorem ipsum" },
    { id: 4, title: "name 4", price: 77, description: "Lorem ipsum" },
  ],
  cartItemList: [{ id: 1, title: "name 1", price: 2, quantity: 1, total: 3 }],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_CART)
    state = {
      itemList: state.itemList.filter((item) => true),
      cartItemList: state.cartItemList.filter((item) => true),
      isChartVisible: !state.isChartVisible,
    };
  else if (action.type === ADD_TO_CART) {
    state = {
      itemList: state.itemList.filter((item) => true),
      cartItemList: state.cartItemList.filter((item) => true),
      isChartVisible: state.isChartVisible,
    };

    const existingItem = state.cartItemList.filter((item) => {
      return item.id === action.item.id;
    });
    if (existingItem.length == 0) {
      const item2 = {...action.item, total: action.item.price, quantity: 1};
      state.cartItemList.push(item2);

    } else {
      existingItem[0].quantity++;
      existingItem[0].total = existingItem[0].quantity * existingItem[0].price;
    }
  }
  else if(action.type === REMOVE_FROM_CART) {
    state = {
      itemList: state.itemList.filter((item) => true),
      cartItemList: state.cartItemList.filter((item) => true),
      isChartVisible: state.isChartVisible,
    };

    const existingItem = state.cartItemList.filter((item) => {
      return item.id === action.item.id;
    });
    if (existingItem[0].quantity === 1) {
      state.cartItemList = [...state.cartItemList.filter(item => item.id !== action.item.id)];
    } else {
      existingItem[0].quantity--;
      existingItem[0].total = existingItem[0].quantity * existingItem[0].price;
    }
  }
  return state;
};

const store = createStore(cartReducer);

export default store;
