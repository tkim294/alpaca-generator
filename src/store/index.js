import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alpacaSlice from './alpaca-slice';
import detailsSlice from "./details-slice";

const rootReducer = combineReducers({
    alpaca: alpacaSlice.reducer,
    detail: detailsSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer
});

export default store;