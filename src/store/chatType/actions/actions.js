import store from "../../store";
import {_setChatType} from "../slice/slice";

export const setChatType = (data) => store.dispatch(_setChatType(data))