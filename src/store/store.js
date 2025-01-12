import {configureStore} from "@reduxjs/toolkit";
import modal from "./modal/slice/slice";
import auth from "./auth/slice/slice";
import request from "./auth/slice/slice"
import chatType from "./chatType/slice/slice";

const store = configureStore({
    reducer: {
        modal,
        auth,
        request,
        chatType,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
