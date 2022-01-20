import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const defaultSate = {
    counter: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: defaultSate,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        }
    }
});

export const counterActions = counterSlice.actions;

const store = createStore(counterSlice.reducer);
export default store;
