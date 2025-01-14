import {IoMdSearch} from "react-icons/io";
import {useAuth} from "../../../../../../store/hooks/hooks";
import {RiArrowDropDownLine} from "react-icons/ri";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {setLogout} from "../../../../../../store/auth/actions/actions";
import toast from "react-hot-toast";
import {SERVICE_LIST} from "../../../../../../utils/service-list";
import {IoClose} from "react-icons/io5";

export default function AccountHeader() {

    const navigate = useNavigate();
    const {user} = useAuth()
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");

    const showHandler = () => {
        setShow(!show);
    }

    const list = search.trim() ? SERVICE_LIST.filter((s) =>
                s.service?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
            : []
    ;

    return (
        <div className="h-16 w-full flex justify-between items-center border-b border-zinc-300 shadow w-full">

            <div className="flex items-center gap-x-5 px-5">
                <Link to="/">
                    <img className="h-9" src="https://cdn.armut.com/images/themes/armut/logo-negative.png"/>

                </Link>
                <div className="flex items-center ml-3 border-zinc-300 border px-2 w-[400px] shadow relative">
                    <IoMdSearch/>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className="relative h-9 px-5 outline-none text-zinc-500 text-md w-full"
                        type="text"
                        placeholder="Başka bir ihtiyacın var mı ?"
                    />
                    {search && (
                        <IoClose onClick={() => {
                            setSearch("")
                        }}/>
                    )}
                    <ul className="absolute bg-white text-black w-full shadow-lg h-auto overflow-y-auto top-full left-0 mt-1">
                        {list?.map((item, index) => (
                            <Link to={`/sorular/${item.id}`} key={index}
                                  className="px-5 py-2 hover:bg-zinc-200 cursor-pointer flex flex-col">
                                {item.service}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex items-center gap-x-8 px-5">
                <Link to="/islerim" className="text-md font-semibold cursor-pointer">İşlerim</Link>

                <div className="flex items-center gap-x-3">
                    <span
                        className="h-8 w-8 text-sm font-semibold rounded-full bg-[#c96ab1] flex items-center justify-center text-white ">
                        {user?.name.charAt(0).toUpperCase()}
                    </span>
                    <div
                        onClick={() => showHandler()}
                        className="flex items-center gap-x-2 cursor-pointer relative">
                        <span className="text-md font-semibold">{user?.name}</span>
                        {show ? (
                            <RiArrowDropDownLine className="text-3xl rotate-180"/>
                        ) : (
                            <RiArrowDropDownLine className="text-3xl"/>
                        )}

                        {show && (
                            <ul className="absolute top-9 w-[150px] -left-[35px] z-10 bg-white h-auto px-5 py-3 border border-zinc-300 shadow flex flex-col gap-y-3">
                                <Link to="/hesabım/hesap-detayları">Hesabım</Link>
                                {user?.role === "Admin" && (
                                    <Link
                                        to={"/admin-panel/istatistik"}>
                                        Admin Panel
                                    </Link>
                                )}
                                <li
                                    onClick={() => {
                                        setLogout()
                                        toast.success("Çıkış yapıldı")
                                        navigate("/")
                                    }}
                                >Çıkış Yap
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}