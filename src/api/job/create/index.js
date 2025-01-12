import axios from "axios";
import toast from "react-hot-toast";
import {destroyAllModal} from "../../../store/modal/actions/actions";

export const createJob = async (offerId, Description) => {
    try {
        await axios.post(`/api/Job/create-job/${offerId}`, {
            Description
        })
        toast.success('İşlem başarılı')
        destroyAllModal()
    } catch (error) {
        if (error.response) {
            console.log(error.response);
        }
    }
}