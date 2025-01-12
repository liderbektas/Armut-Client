import toast from "react-hot-toast";
import axios from "axios";
import {setUser} from "../../../store/auth/actions/actions";
import {destroyAllModal} from "../../../store/modal/actions/actions";

export const signup = async (Name, Email, Password, setError) => {
    if (!Name || !Email || !Password) {
        toast.error("Eksik Alan Bırakmayınız.");
        return
    }
    try {
        const response = await axios.post("/api/Auth/Register", {
            Name,
            Email,
            Password,
        })
        setUser(response.data.user)
        toast.success("Kayıt Başarılı");
        destroyAllModal()
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                toast.error(error.response.data.message)
            }
        }
    }
}