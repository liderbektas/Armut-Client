import {IoMdArrowBack} from "react-icons/io";
import {Link, useNavigate} from "react-router-dom";
import {SERVICE_LIST} from "../../../../utils/service-list";
import {useState} from "react";
import {IoClose} from "react-icons/io5";
import {createModal} from "../../../../store/modal/actions/actions";
import {useModal} from "../../../../store/hooks/hooks";
import Modals from "../../../../modals/apperance";
import {motion} from "framer-motion"

export default function AddServe() {

    const modal = useModal()
    const navigate = useNavigate()
    const [search, setSearch] = useState("");

    const list = search.trim() ? SERVICE_LIST.filter((s) =>
                s.service?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
            : []
    ;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <IoMdArrowBack
                onClick={() => navigate("/hizmet-ver/hizmetlerim")}
                className="text-2xl cursor-pointer"/>


            <div className="pt-6">
                <h3 className="text-3xl leading-6 font-medium">Hizmet profili ekle</h3>
            </div>


            <div className="flex flex-col pt-10 gap-y-3 relative">
                <h4 className="text-xl font-medium">Hangi yeni hizmeti sunmak istersin?</h4>
                <div
                    className="flex justify-between items-center w-full px-5 rounded-md border border-zinc-300 outline-none focus:border-zinc-500">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Yeni bir hizmet seç ve ekle"
                        className="relative h-14 outline-none text-zinc-500 w-full"
                    />
                    {search && (
                        <IoClose onClick={() => {
                            setSearch("")
                        }}/>
                    )}
                </div>
                <ul className="absolute bg-white text-black w-full shadow-lg h-auto overflow-y-auto top-full left-0 mt-1">
                    {list?.map((item, index) => (
                        <div
                            onClick={() => createModal("serve", item)}
                            key={index}
                            className="px-5 py-3 hover:bg-zinc-200 cursor-pointer flex flex-col">
                            <>
                                {item.service}
                            </>
                        </div>
                    ))}
                </ul>
            </div>
            {modal.length > 0 && <Modals/>}
        </motion.div>

    )
}