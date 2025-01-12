import toast from "react-hot-toast";
import axios from "axios";

export const createRate = async(singleRate, user, comment, rating) => {
    try {
        await axios.put(
            `api/Offer/finish-offer/${singleRate.id}?authorId=${user.id}&recipientId=${singleRate.userId}`,
            {
                content: comment,
                rate: rating.toString()
            }
        );
    }catch (error){
        if(error.response){
            if(error.response.status === 400){
                toast.error(error.response.data.message)
            }
        }
    }
}