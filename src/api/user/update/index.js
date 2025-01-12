import axios from "axios";
import {setUser} from "../../../store/auth/actions/actions";
import toast from "react-hot-toast";
import {destroyAllModal} from "../../../store/modal/actions/actions";

export const updateUser = async (Email, Name, Phone, Address, id) => {
    try {
        const {data} = await axios.put(`/api/User/update/${id}`, {
            Email,
            Name,
            Phone,
            Address,
        })
        setUser(data.user)
        toast.success("Kullanıcı başarıyla güncellendi.");
        destroyAllModal()
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong", error.message);
    }
}

export const updatePassword = async (Password, NewPassword, NewPasswordConfirm, id) => {
    if (NewPassword !== NewPasswordConfirm) {
        toast.error("Yeni şifreler uyuşmuyor!")
        return
    }

    try {
        const response = await axios.put(`/api/User/update-password/${id}`, {
            Password,
            NewPassword,
        })
        setUser(response.data.user)
        toast.success("Şifre başarıyla güncellendi.");
        destroyAllModal()
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                toast.error(error.response.data.message)
            }
        }
    }
}

export const updatePaymentMethod = async (CreditCardNumber, CreditCardLastMonth, CreditCardLastYear, CreditCardCvvCode, id) => {
    try {
        const response = await axios.put(`/api/User/update-payment/${id}`, {
            CreditCardNumber,
            CreditCardLastMonth,
            CreditCardLastYear,
            CreditCardCvvCode,
        })
        setUser(response.data.user)
        toast.success("Ödeme yöntemi güncellendi.");
        destroyAllModal()
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                toast.error(error.response.data.message)
            }
        }
    }
}