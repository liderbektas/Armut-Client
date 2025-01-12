import toast from "react-hot-toast";
import axios from "axios";

export const updateRequest = async (id) => {
    try {
        await axios.put(`/api/Request/update-request/${id}`)
        toast.success("İşlem başarıyla gerçekleştirildi")
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                toast.error(error.response.data.message)
            }
        }
    }
}