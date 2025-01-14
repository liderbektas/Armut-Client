import {NavLink, useNavigate} from "react-router-dom";
import classNames from "classnames";
import {useAuth} from "../../../../store/hooks/hooks";
import {RxExit} from "react-icons/rx";


export default function AdminSidebar() {

    const {user} = useAuth()
    const navigate = useNavigate();

    return (
        <div className="w-[275px] h-screen border-r border-zinc-700 text-white flex flex-col">

            <div className="pb-12 p-5">
                <img className="h-9" src="https://cdn.armut.com/images/themes/armut/logo-negative.png" alt="Logo"/>
            </div>

            <ul className="flex flex-col gap-y-3 p-5">
                <NavLink
                    to="/admin-panel/istatistik"
                    className={({isActive}) =>
                        classNames("block h-10 rounded-md flex items-center px-5", {
                            "bg-[#27272a]": isActive,
                            "": !isActive
                        })
                    }
                >
                    İstatistikler
                </NavLink>

                <NavLink
                    to="/admin-panel/kullanicilar"
                    className={({isActive}) =>
                        classNames("block h-10 rounded-md flex items-center px-5", {
                            "bg-[#27272a]": isActive
                        })
                    }
                >
                    Kullanıcılar
                </NavLink>
            </ul>

            <div className="mt-auto h-20 border-t w-full border-zinc-600">
                <div className="p-5 flex items-center justify-between gap-y-2">
                    <div className="flex flex-col gap-y-1">
                        <span className="text-sm">{user.name}</span>
                        <span className="text-sm">{user.email}</span>
                    </div>
                    <RxExit onClick={() => navigate("/islerim")} className="text-xl cursor-pointer text-red-600"/>
                </div>
            </div>
        </div>
    );
}
