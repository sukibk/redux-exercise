import {createStore} from "redux";
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState, //I can also omit the second initialState
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

// const counterReducer = (state= initialState, action) => {
//     if(action.type === 'increment') return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter
//     }
//
//     if (action.type === 'decrement') return{
//         counter: state.counter - 1,
//         showCounter: state.showCounter
//     }
//
//     if (action.type === 'increase') return {
//         counter: state.counter + action.value,
//         showCounter: state.showCounter
//     }
//
//     if(action.type === 'toggle') return {
//         showCounter: !state.showCounter,
//         counter: state.counter
//     }
//
//     return state;
// }
//
// const store = createStore(counterReducer);
//
// export default store;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
    // or in this case just reducer: counterSLice.reducer
})

export const counterActions = counterSlice.actions; //gives is increment, decrement, increase, and toggleCounter
export default store;