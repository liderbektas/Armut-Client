import store from "../../store";
import {_setAppend, _setDestroy, _setDestroyAll} from "../slice/slice";

export const createModal = (name, data = {}) => store.dispatch(_setAppend({
    name,
    data
}))
export const destroyModal = () => store.dispatch(_setDestroy())
export const destroyAllModal = () => store.dispatch(_setDestroyAll())