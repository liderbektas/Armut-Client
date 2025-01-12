import OfferItem from "./offer-item";

export default function OfferList({offers, setSelectedUser}) {
    return offers.length > 0 ? (
        offers.map((offerGroup) =>
            offerGroup?.length > 0 ? (
                offerGroup.filter((o) => o.status === "Accepted").map((offer) => <OfferItem setSelectedUser={setSelectedUser} offer={offer} key={offer.id}/>)
            ) : null
        )
    ) : (
        <p className="text-center text-sm text-gray-500">No offers available.</p>
    )
}