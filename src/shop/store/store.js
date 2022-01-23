import { createSlice, configureStore } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: "ui-slice",
  initialState: {
    isChartVisible: true,
  },
  reducers: {
    toggleCart: (state) => {
      state.isChartVisible = !state.isChartVisible;
    },
  },
});

const CartSlice = createSlice({
  name: "cart-slice",
  initialState:  {items: [{ id: 1, title: "name 1", price: 2, quantity: 1, total: 3 }]},
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.filter((item) => {
        return item.id === action.payload.id;
      });
      if (existingItem.length == 0) {
        const item2 = { ...action.payload, total: action.payload.price, quantity: 1 };
        state.items.push(item2);
      } else {
        existingItem[0].quantity++;
        existingItem[0].total = existingItem[0].quantity * existingItem[0].price;
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.filter((item) => {
        return item.id === action.payload;
      });
      if (existingItem[0].quantity === 1) {
        state.items = [
          ...state.items.filter((item) => item.id !== action.payload),
        ];
      } else {
        existingItem[0].quantity--;
        existingItem[0].total = existingItem[0].quantity * existingItem[0].price;
      }
    }
  }
});

export const UIActions = UISlice.actions;
export const CartActions = CartSlice.actions;

const store = configureStore({
  reducer: {
    UI: UISlice.reducer,
    Cart: CartSlice.reducer
  },
});

export default store;
