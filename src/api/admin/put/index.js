import axios from "axios";
import toast from "react-hot-toast";

export const verifiedUser = async(userId) => {
    try {
        await axios.put(`/api/User/${userId}`)
        toast.success("Kullanıcı başarıyla onaylandı.")
    }catch (error){
        console.log(error);
    }
}