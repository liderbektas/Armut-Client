import {IoClose} from "react-icons/io5";
import {destroyAllModal} from "../../../../../store/modal/actions/actions";

export default function LoginModalHeader(){
    return (
        <>
            <header className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">Hesabına erişmek için giriş yap</h3>
                <IoClose
                    onClick={destroyAllModal}
                    className="text-3xl cursor-pointer hover:text-gray-600"
                />
            </header>
        </>
    )
}