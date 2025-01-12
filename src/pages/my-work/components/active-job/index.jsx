import { useAuth } from "../../../../store/hooks/hooks";
import RequestFalse from "./components/request-false";
import RequestTrue from "./components/request-true";
import { motion } from "framer-motion";
import useFetch from "../../../../hooks/get";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ActiveJob() {

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

    const hasActiveRequests = data && Array.isArray(data) &&
        data.some(d => d.status === "active");

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {hasActiveRequests ? <RequestTrue offers={offers} /> : <RequestFalse />}
        </motion.div>
    );
}
