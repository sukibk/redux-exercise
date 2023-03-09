import { createSlice, configureStore } from '@reduxjs/toolkit';
import {reducer} from "react-hot-toast";

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState, //I can also omit the second initialState
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter += action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;