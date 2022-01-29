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

const dummySlice = createSlice({
  name: "dummy",
  initialState: {num:0},
  reducers: {
    set1: (state, action) => {
      console.log(1, state, action.payload);
      state.num = 1;
    },
    set2: (state, action) => {
      console.log(2, state, action.payload);
      state.num = 2;
    },
  },
});

const CartSlice = createSlice({
  name: "cart-slice",
  initialState: {
    items: [{ id: 1, title: "name 1", price: 2, quantity: 1, total: 3 }],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.filter((item) => {
        return item.id === action.payload.id;
      });
      if (existingItem.length == 0) {
        const item2 = {
          ...action.payload,
          total: action.payload.price,
          quantity: 1,
        };
        state.items.push(item2);
      } else {
        existingItem[0].quantity++;
        existingItem[0].total =
          existingItem[0].quantity * existingItem[0].price;
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
        existingItem[0].total =
          existingItem[0].quantity * existingItem[0].price;
      }
    },
  },
});

export const UIActions = UISlice.actions;
export const CartActions = CartSlice.actions;

export const actionCreator = (data) => {
  console.log("Creator");
  return (dispatch) => {
    console.log("return funct");

    dispatch(dummySlice.actions.set1(1));
    setTimeout(() => {
      dispatch(dummySlice.actions.set2(2));
    }, 300);
  };
};

const store = configureStore({
  reducer: {
    Dummy: dummySlice.reducer,
    UI: UISlice.reducer,
    Cart: CartSlice.reducer,
  },
});

export default store;
