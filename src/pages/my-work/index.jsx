import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import ActiveJob from "./components/active-job";
import OldJob from "./components/inactive-job";
import {motion} from "framer-motion";
import {SERVICE_LIST} from "../../utils/service-list";
import {IoPersonSharp, IoStar} from "react-icons/io5";
import {Link} from "react-router-dom";
import {useAuth} from "../../store/hooks/hooks";
import useFetch from "../../hooks/get";
import {useEffect, useState} from "react";
import axios from "axios";

export default function MyWorkPage() {

    const { user } = useAuth();
    const { data } = useFetch(`/api/Request/get-request/${user.id}`);
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                if (Array.isArray(data)) {
                    const responses = await Promise.all(
                        data.filter(d => d.status === "active").map(o =>
                            axios.get(`/api/Offer/get-offer-by-request-id/${o.id}`)
                        )
                    );
                    setOffers(responses.map(response => response.data));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchOffer();
    }, [data]);


    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <Tabs className="w-full min-h-[450px] bg-[#f3f3f3] pt-10 flex flex-col items-center">
                <TabList className="flex bg-[#c5c6cc] rounded-md p-1 shadow-md">
                    <Tab
                        className="rounded-md text-zinc-500 p-1 cursor-pointer transition-all duration-200 text-sm w-40 text-center aria-selected:bg-white aria-selected:shadow aria-selected:text-primary aria-selected:border-gray-300 border border-transparent hover:text-gray-700"
                    >
                        İşlerim
                    </Tab>
                    <Tab
                        className="rounded-md p-1 text-zinc-500 cursor-pointer transition-all duration-200 text-sm w-40 text-center aria-selected:bg-white aria-selected:shadow aria-selected:text-primary aria-selected:border-gray-300 border border-transparent hover:text-gray-700"
                    >
                        Eski İşlerim
                    </Tab>
                </TabList>

                <div className="pt-10 flex items-center justify-center">
                    <TabPanel>
                        <ActiveJob offers={offers} data={data} />
                    </TabPanel>
                    <TabPanel>
                        <OldJob data={data} />
                    </TabPanel>
                </div>
            </Tabs>

            <div className="pt-24 w-[1150px] mx-auto">
                <h5 className="text-4xl text-[#585965] text-center mb-10">Trend Hizmetler</h5>
                <div className="grid grid-cols-4 gap-4">
                    {SERVICE_LIST.slice(0, 8).map((item, index) => (
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
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
