import toast from "react-hot-toast";
import axios from "axios";
import {setUser} from "../../../store/auth/actions/actions";
import {destroyAllModal} from "../../../store/modal/actions/actions";

export const signIn = async (Email, Password) => {
    if (!Email || !Password) {
        toast.error("Eksik Alan Bırakmayınız.");
    }
    try {
        const {data} = await axios.post("/api/Auth/Login", {Email, Password}, {
            withCredentials: true,
        });
        setUser(data)
        toast.success("Giriş Başarılı");
        destroyAllModal()
    } catch (error) {
        toast.error("Email ya da Şifre Hatalı");
    }
}