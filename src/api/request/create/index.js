import axios from "axios";
import toast from "react-hot-toast";

export const createRequest = async (user, list, data) => {
    try {
        await axios.post(`/api/Request/create-request/${user.id}`, {
            ServiceName: list.service,
            AveragePrice: list.priceRange,
            Details: data.map((item) => ({
                Answer: item.answer,
                Question: item.question,
            }))
        })
        toast.success("Hizmet başarıyla oluşturuldu");
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                toast.error(error.response.data.message)
            }
        }
    }
}
