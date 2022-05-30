import { createSlice } from "@reduxjs/toolkit";

const initialDetailsState = [
    {
        name: 'backgrounds',
        value: 'blue50'
    },
    {
        name: 'accessories',
        value: 'earings'
    },
    {
        name: 'ears',
        value: 'default'
    },
    {
        name: 'hair',
        value: 'default'
    },
    {
        name: 'neck',
        value: 'default'
    },
    {
        name: 'eyes',
        value: 'default'
    },
    {
        name: 'mouth',
        value: 'default'
    },
    {
        name: 'leg',
        value: 'default'
    },
];

const detailsSlice = createSlice({
    name: 'detail',
    initialState: initialDetailsState,
    reducers: {
        onChangeDetail(state, action) {
            state.forEach(item => {
                if(item.name === action.payload.name) {
                    item.value = action.payload.value
                }
            });
        },
    }
})

export const detailsActions = detailsSlice.actions;

export default detailsSlice;