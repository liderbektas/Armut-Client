import { FaEdit } from "react-icons/fa";
import Button from "../../../../../../components/button";
import { useAuth, useModal } from "../../../../../../store/hooks/hooks";
import { createModal } from "../../../../../../store/modal/actions/actions";
import Modals from "../../../../../../modals/apperance";
import { useState } from "react";
import InputField from "../../../../../../components/input";
import {updateUser} from "../../../../../../api/user/update";

export default function AccountForm() {

    const { user } = useAuth();
    const modal = useModal();

    const [userState, setUserState] = useState({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserState((prev) => ({ ...prev, [name]: value }));
    };

    const updatePhone = (newPhone) => {
        setUserState((prev) => ({ ...prev, phone: newPhone }));
    };

    const updateAddress = (newAddress) => {
        setUserState((prev) => ({ ...prev, address: newAddress }));
    };

    const handleClick = (e) => {
        e.preventDefault();
        updateUser(
            userState.email,
            userState.name,
            userState.phone,
            userState.address,
            user.id
        );
    };

    return (
        <form className="w-full flex flex-col gap-y-6">
            <InputField
                label="Ad"
                name="name"
                value={userState.name}
                onChange={changeHandler}
            />

            <InputField
                label="Email"
                name="email"
                type="email"
                value={userState.email}
                onChange={changeHandler}
            />

            <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm">
                    Telefon numarası
                </label>
                <div className="flex flex-col gap-y-3 bg-[#f8f8f8] p-3 text-xs">
                    <span className="text-gray-600">{userState.phone || "Kayıtlı telefon yok"}</span>
                    <div
                        onClick={() => createModal("phone", updatePhone)}
                        className="flex items-center gap-x-2 text-primary cursor-pointer"
                    >
                        <FaEdit />
                        <button type="button">Değiştir</button>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm">
                    Adres
                </label>
                <div className="flex flex-col gap-y-3 bg-[#f8f8f8] p-3 text-xs">
                    <span className="text-gray-600">{userState.address || "Kayıtlı adres yok"}</span>
                    <div
                        onClick={() => createModal("address", updateAddress)}
                        className="flex items-center gap-x-2 text-primary cursor-pointer"
                    >
                        <FaEdit />
                        <button type="button">Değiştir</button>
                    </div>
                </div>
            </div>

            <Button
                onClick={(e) => handleClick(e)}
                as="button"
                variant="filled-button"
                type="submit"
                size="large"
            >
                Kaydet
            </Button>

            {modal.length > 0 && <Modals />}
        </form>
    );
}
