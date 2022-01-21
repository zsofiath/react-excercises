import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultCounterSate = {
    counter: 0
};

const counterSlice = createSlice({
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

const authSlice = createSlice({
name: 'auth',
initialState: {isAuthenticated: false},
reducers: {
    login: (state) => {
        state.isAuthenticated = true;
    },
    logout: (state) => {
        state.isAuthenticated = false;
    }
}
});

export const counterActions = counterSlice.actions;
export const loginActions = authSlice.actions;

const store = configureStore({
    reducer: {counter: counterSlice.reducer, login: authSlice.reducer}
});
export default store;
