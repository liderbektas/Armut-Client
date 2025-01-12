import {useNavigate} from "react-router-dom";
import {setLogout} from "../../../../store/auth/actions/actions";
import toast from "react-hot-toast";

export default function UserProfileHeader() {

    const navigate = useNavigate()

    return (
        <div className="w-full border-b px-40 border-zinc-300 shadow h-16 flex items-center justify-between">
            <img className="h-8 cursor-pointer" src="https://cdn.armut.com/images/armut-header-logo-colour@2x.png"/>

            <div className="flex items-center gap-x-5">
                <button onClick={() => {
                    setLogout()
                    navigate("/")
                    toast.success("Çıkış yapıldı")
                }} className="text-base font-semibold text-zinc-500">
                    ÇIKIŞ
                </button>
                <button onClick={() => navigate("/hesabım/hesap-detayları")}
                        className="text-base font-semibold text-zinc-500">
                    HESABIM
                </button>
            </div>
        </div>
    )
}