import { IoClose } from "react-icons/io5";
import Button from "../../../components/button";
import { destroyAllModal } from "../../../store/modal/actions/actions";
import { useState } from "react";

export default function PhoneModal({ data }) {
    const [phone, setPhone] = useState("");

    const handleClick = () => {
        data(phone);
        destroyAllModal();
    };

    return (
        <div className="w-[500px] bg-white rounded-md p-5">
            <div className="flex items-center justify-between">
                <div></div>
                <span className="text-sm font-semibold">Telefon Doğrulaması</span>
                <IoClose onClick={destroyAllModal} className="text-3xl font-semibold cursor-pointer" />
            </div>

            <div className="flex flex-col gap-4 pt-10">
                <input
                    type="tel"
                    placeholder="0501 234 56 78"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-300 px-4 py-1.5 w-full text-zinc-600 text-sm focus:border-zinc-600 focus:outline-none"
                />
                <Button onClick={handleClick} as="button" variant="filled-button" size="large">
                    Güncelle
                </Button>
            </div>
        </div>
    );
}
