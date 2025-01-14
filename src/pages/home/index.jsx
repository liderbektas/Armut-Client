import {motion} from "framer-motion";
import {useState} from "react";
import {SERVICE_LIST} from "../../utils/service-list";
import {Link} from "react-router-dom";
import {IoPersonSharp} from "react-icons/io5";
import {IoStar} from "react-icons/io5";
import {useAuth} from "../../store/hooks/hooks";
import {createModal} from "../../store/modal/actions/actions";


export default function HomePage() {

    const {user} = useAuth();
    const [search, setSearch] = useState("");
    const list = search.trim() ? SERVICE_LIST.filter((s) =>
            s.service?.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        : [];

    console.log(user)

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}>

            <div className="absolute top-0 left-0">
                <img
                    className="h-[600px] w-screen object-cover"
                    src="https://cdn.armut.com/images/themes/tr/hero.jpg"
                    alt="hero"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                    <div className="flex flex-col items-center gap-y-6">
                        <h3 className="text-6xl font-semibold drop-shadow-lg">
                            Hizmet Piş, Ağzıma Düş
                        </h3>
                        <p className="text-2xl font-semibold drop-shadow-lg">
                            İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini hallet
                        </p>
                        <div className="relative w-[486px] mt-5 text-black hover:shadow-2xl">
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="hangi hizmeti arıyorsunuz?"
                                className="w-full h-14 px-4 outline-none rounded-sm text-xl"
                            />
                            <div
                                className="absolute bg-primary top-0 right-0 h-full flex items-center px-10 text-white text-xl font-semibold rounded-r-sm">
                                Ara
                            </div>
                            <ul className="absolute bg-white text-black w-full shadow-lg h-auto overflow-y-auto top-full left-0">
                                {list?.map((item, index) =>
                                    user ? (
                                        <Link
                                            to={`/sorular/${item.id}`}
                                            key={index}
                                            className="px-5 py-3 hover:bg-zinc-200 z-10 cursor-pointer flex flex-col"
                                        >
                                            {item.service}
                                        </Link>
                                    ) : (
                                        <li
                                            onClick={() => createModal("login")}
                                            key={index}
                                            className="px-5 py-3 hover:bg-zinc-200 z-10 cursor-pointer flex flex-col"
                                        >
                                            {item.service}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[1150px] mx-auto pt-20 px-5 pt-[600px]">
                <h5 className="text-4xl text-[#585965] text-center mb-10">Trend Hizmetler</h5>
                <div className="grid grid-cols-4">
                    {SERVICE_LIST.slice(0, 8).map((item, index) => (
                        !user ? (
                            <div
                                key={index}
                                onClick={() => createModal("login")}
                                className="relative overflow-hidden border border-zinc-200 rounded-sm mb-4 cursor-pointer w-[270px] h-[280px] bg-white"
                            >
                                <img
                                    src={item.image}
                                    alt={item.service}
                                    className="w-full h-[200px] object-cover rounded-t-sm"
                                />
                                <div className="absolute bottom-0 left-0 right-0 px-4 py-1">
                                    <h6 className="font-semibold text-sm text-primary">{item.service}</h6>
                                    <div className="flex items-center gap-x-1 text-zinc-600 text-sm py-1">
                                        <IoPersonSharp className="text-xs"/>
                                        <span className="text-xs">{item.professionals} profesyonel</span>
                                    </div>
                                    <div className="flex items-center gap-x-1 text-zinc-600 text-sm">
                                        <IoStar className="text-xs"/>
                                        <span className="text-xs">{item.star}</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                to={`/sorular/${item.id}`}
                                key={index}
                                className="relative overflow-hidden border border-zinc-200 rounded-sm mb-4 cursor-pointer w-[270px] h-[280px] bg-white"
                            >
                                <img
                                    src={item.image}
                                    alt={item.service}
                                    className="w-full h-[200px] object-cover rounded-t-sm"
                                />
                                <div className="absolute bottom-0 left-0 right-0 px-4 py-1">
                                    <h6 className="font-semibold text-sm text-primary">{item.service}</h6>
                                    <div className="flex items-center gap-x-1 text-zinc-600 text-sm py-1">
                                        <IoPersonSharp className="text-xs"/>
                                        <span className="text-xs">{item.professionals} profesyonel</span>
                                    </div>
                                    <div className="flex items-center gap-x-1 text-zinc-600 text-sm">
                                        <IoStar className="text-xs"/>
                                        <span className="text-xs">{item.star}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
