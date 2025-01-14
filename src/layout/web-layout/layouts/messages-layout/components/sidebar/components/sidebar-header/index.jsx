import {FaAngleLeft} from "react-icons/fa6";
import {useChatType} from "../../../../../../../../store/hooks/hooks";
import { useNavigate } from "react-router-dom";

export default function SidebarHeader() {

    const navigate = useNavigate();
    const chatType = useChatType()

    return (
        <div className="w-full flex items-center justify-between px-5 h-[48px] border-b border-zinc-300">
            <FaAngleLeft onClick={() => navigate(
                chatType === "offer" ? "/islerim" : "/hizmet-ver/islerim"
            )} className="text-2xl cursor-pointer"/>
            <span className="text-lg font-semibold cursor-pointer">
                    {chatType === "offer" ? "Teklif Takibi" : "İş Takibi"}
                </span>
            <span className="text-xs font-semibold text-[#1f8f43] cursor-pointer">Detaylar</span>
        </div>
    )
}