import toast from "react-hot-toast";
import axios from "axios";
import {destroyAllModal} from "../../../store/modal/actions/actions";

export const createOffer = async (data, offer, user) => {
    try {
        await axios.post(`/api/Offer/create-offer/${data.id}/${user.id}`, {
            Blurb: offer.blurb,
            OfferPrice: offer.price,
        })
        toast.success("Başarıyla teklif verildi")
        destroyAllModal()
    } catch (error) {
        console.log(error)
        if (error.response) {
            if (error.response.status === 400) {
                toast.error(error.response.data.message)
            }
        }
    }
}