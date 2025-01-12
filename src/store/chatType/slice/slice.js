import {createSlice} from "@reduxjs/toolkit";

const chatType = createSlice({
    name: "chatType",
    initialState: {
        chatType : localStorage.getItem("chatType") ? JSON.parse(localStorage.getItem("chatType")) : null,
    },
    reducers: {
        _setChatType: (state, action) => {
            state.chatType = action.payload;
            localStorage.setItem("chatType", JSON.stringify(state.chatType));
        }
    }
})

export const {_setChatType} = chatType.actions
export default chatType.reducer