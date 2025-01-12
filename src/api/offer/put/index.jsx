import toast from "react-hot-toast";
import axios from "axios";
import {destroyAllModal} from "../../../store/modal/actions/actions";

export const updateOfferStatus = async (offerId) => {
    try {
        await axios.put(`/api/Offer/update-offer/${offerId}`, {
            Status: "Accepted"
        })
        destroyAllModal()
        toast.success("Teklif kabul edildi")
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                toast.error(error.response.data.message)
            }
        }
    }
}