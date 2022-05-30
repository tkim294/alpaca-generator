import { createSlice } from "@reduxjs/toolkit";
import { HAIR } from "../constant/constant";

const alpacaSlice = createSlice({
    name: 'alpaca',
    initialState: {
        name: HAIR.name,
        values: HAIR.values
    },
    reducers: {
        onChangeStyle(state, action) {
            state.name = action.payload.name;
            state.values = action.payload.values;
        }
    }
})

export const alpacaActions = alpacaSlice.actions;

export default alpacaSlice;