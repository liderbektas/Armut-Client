import {createSlice} from "@reduxjs/toolkit";

const modal = createSlice({
    name: "modal",
    initialState: {
        modal: []
    },
    reducers: {
        _setAppend: (state, action) => {
            state.modal = [...state.modal, action.payload];
        },
        _setDestroy: (state) => {
            const data = [...state.modal];
            data.pop()
            state.modal = data
        },
        _setDestroyAll : (state) => {
            state.modal = [];
        }
    }
})

export const {_setAppend,_setDestroy ,  _setDestroyAll} = modal.actions;
export default modal.reducer;