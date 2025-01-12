import {FiPlus} from "react-icons/fi";
import {Link} from "react-router-dom";
import useFetch from "../../../../hooks/get";
import {useAuth} from "../../../../store/hooks/hooks";
import {MdKeyboardArrowRight} from "react-icons/md";
import {motion} from "framer-motion";

export default function MyServe() {

    const {user} = useAuth()
    const {data: services} = useFetch(`/api/Serve/get-serve/${user.id}`)

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <h3 className="text-3xl leading-8 font-medium">Hizmetlerim</h3>
            <div className="flex flex-col gap-y-5 pt-8">
                <div className="flex flex-col gap-y-3">
                    <h4 className="text-xl font-medium">Hizmet profilleri</h4>
                    <p className="text-sm text-zinc-500 leading-3">Profilin üzerinden istediğin hizmeti ekleyebilir,
                        düzenleyebilir veya silebilirsin.</p>
                </div>

                <Link
                    to="/hizmet-ver/hizmet-ekle"
                    className="flex w-40 items-center gap-x-2 px-5 h-10 rounded-md border border-zinc-400 cursor-pointer hover:border-zinc-700">
                    <FiPlus className="text-md"/>
                    <span className="font-semibold text-sm">Hizmet ekle</span>
                </Link>

                {services?.length > 0 ? (
                    <ul className="w-full border py-3 px-4 border-zinc-300 rounded-md">
                        {services.map((service, index) => (
                            <Link to={`/hizmet-ver/hizmet-detay/${service.id}`} key={index}
                                  className={`py-3 cursor-pointer flex items-center justify-between ${index === (services.length - 1) ? "" : "border-b border-zinc-200"}`}>
                                <span className="text-sm">{service.name}</span>
                                <MdKeyboardArrowRight className="text-2xl"/>
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-zinc-600 bg-zinc-100 p-4 rounded-md border border-zinc-300">
                        Şu anda herhangi bir hizmet sunmuyorsunuz. Hizmet eklemek için yukarıdaki
                        <span className="font-semibold text-zinc-700"> "Hizmet ekle"</span>
                        butonuna tıklayın ve hizmet profilinizi oluşturun!
                    </p>
                )}

            </div>
        </motion.div>
    )
}