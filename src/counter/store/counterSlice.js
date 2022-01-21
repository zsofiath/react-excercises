import { createSlice } from "@reduxjs/toolkit";

const defaultCounterSate = {
    counter: 0
};


export const counterSlice = createSlice({
    name: 'counter',
    initialState: defaultCounterSate,
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