import { motion } from "framer-motion";
import OfferNotFound from "./components/offer-not-found";
import useFetch from "../../../../hooks/get";
import { useAuth } from "../../../../store/hooks/hooks";
import OfferDetails from "./components/offer-details";

export default function OfferPage() {
    const { user } = useAuth();
    const { data: offers } = useFetch(`/api/Offer/get-offer/${user.id}`);

    if (!offers || offers.length === 0) {
        return <OfferNotFound />;
    }

    const hasPendingOffers = offers.some(offer => offer.status === "Pending");

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-2xl leading-8 font-medium">Bekleyen Teklifler</h3>

            <div className="pt-16">
                {!hasPendingOffers ? (
                    <OfferNotFound />
                ) : (
                    offers.map((offer) =>
                        offer.status === "Pending" ? (
                            <OfferDetails key={offer.id} offer={offer} />
                        ) : null
                    )
                )}
            </div>
        </motion.div>
    );
}
