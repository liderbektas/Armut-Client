import {useAuth, useChatType} from "../../../../store/hooks/hooks";
import useFetch from "../../../../hooks/get";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import OfferList from "./components/offer-list";
import UserList from "./components/user-list";
import SidebarHeader from "./components/sidebar-header";

export default function MessagesSidebar({setSelectedUser}) {

    const {user} = useAuth();
    const {toUserId} = useParams();
    const [offers, setOffers] = useState([]);
    const chatType = useChatType();
    const {data} = useFetch(chatType === "offer" ? `/api/Request/get-request/${user.id}` : `/api/User/get-user-by-id/${toUserId}`);

    useEffect(() => {
        const fetchOffer = async () => {
            if (chatType !== "offer") {
                setOffers([]);
                return;
            }
            try {
                if (Array.isArray(data)) {
                    const responses = await Promise.all(
                        data
                            .filter((d) => d.status === "active")
                            .map((o) =>
                                axios.get(`/api/Offer/get-offer-by-request-id/${o.id}`)
                            )
                    );
                    setOffers(responses.map((response) => response.data));
                }
            } catch (error) {
                console.error("Error fetching offers:", error);
            }
        };

        fetchOffer();
    }, [data, chatType]);

    console.log(offers)

    return (
        <div className="h-[calc(100vh-63px)] shadow w-[425px] border-r border-zinc-200">
            <SidebarHeader/>
            <ul className="flex flex-col">
                {chatType === "offer"
                    ? <OfferList setSelectedUser={setSelectedUser} offers={offers}/>
                    : <UserList data={data} setSelectedUser={setSelectedUser}/>}
            </ul>
        </div>
    )
}
