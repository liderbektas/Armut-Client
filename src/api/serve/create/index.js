import toast from "react-hot-toast";
import axios from "axios";
import {destroyAllModal} from "../../../store/modal/actions/actions";

export const createServe = async (userId, name, category, description) => {
    try {
        await axios.post(`/api/Serve/create-serve/${userId}`, {
            name,
            category,
            description,
        })
        toast.success("Hizmet başarıyla oluşturuldu")
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