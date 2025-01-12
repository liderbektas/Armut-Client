import {useSelector} from "react-redux";

export const useModal = () => useSelector((state) => state.modal.modal)
export const useAuth = () => useSelector((state) => state.auth)
export const useChatType = () => useSelector((state) => state.chatType.chatType)