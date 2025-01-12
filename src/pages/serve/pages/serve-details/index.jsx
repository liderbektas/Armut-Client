import {useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../../../../store/hooks/hooks";
import useFetch from "../../../../hooks/get";
import {GoArrowLeft} from "react-icons/go";
import {FaRegTrashAlt} from "react-icons/fa";
import {motion} from "framer-motion";

export default function ServeDetails() {

    const {id} = useParams()
    const {user} = useAuth()
    const navigate = useNavigate();
    const {data: services} = useFetch(`/api/Serve/get-serve/${user.id}`)

    const service = services?.find((s) => s.id === Number(id))

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <div className="flex justify-between items-center w-full">
                <GoArrowLeft onClick={() => navigate("/hizmet-ver/hizmetlerim", {replace: true})}
                             className="text-2xl cursor-pointer"/>
                <FaRegTrashAlt className="text-2xl"/>
            </div>

            <div className="pt-4">
                <h3 className="text-3xl font-semibold">{service?.name}</h3>
            </div>

            <div className="pt-8">
                <div className="flex items-center gap-x-4">
                    <span
                        className="h-16 w-16 rounded-full flex items-center justify-center bg-[#c96ab1] text-2xl font-semibold text-white shadow">
                        {user.name.slice(0, 1)}
                    </span>
                    <span className="text-xl font-semibold">{user.name}</span>
                </div>
            </div>
        </motion.div>
    )
}
