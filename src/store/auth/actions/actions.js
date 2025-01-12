import store from "../../store";
import {_setLogout, _setUser} from "../slice/slice";

export const setUser = (data) => store.dispatch(_setUser(data))
export const setLogout = () => store.dispatch(_setLogout())