import redux, {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toogleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});



const store = configureStore({
    reducer: counterSlice.reducer
    // reducer: {counter: counterSlice.reducer}
});

export const counterActions = counterSlice.actions;

export default store;