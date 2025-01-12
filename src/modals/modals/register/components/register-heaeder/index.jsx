import {IoClose} from "react-icons/io5";
import {destroyAllModal} from "../../../../../store/modal/actions/actions";

export default function RegisterHeaeder() {
    return (
        <header className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Giriş yapmak için hesap oluştur</h3>
            <IoClose
                onClick={destroyAllModal}
                className="text-3xl cursor-pointer hover:text-gray-600"
            />
        </header>
    )
}