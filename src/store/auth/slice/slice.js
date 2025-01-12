import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: "auth",
    initialState: {
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    },
    reducers: {
        _setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        _setLogout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        }
    }
});

export const { _setUser, _setAppend, _setLogout } = auth.actions;
export default auth.reducer;
