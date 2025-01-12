import Button from "../../../components/button";
import {IoClose} from "react-icons/io5";
import {createModal, destroyAllModal} from "../../../store/modal/actions/actions";
import {useState} from "react";

export default function FinishJobModal({data}) {

    const [comment, setComment] = useState("");
    const [error, setError] = useState("");

    const validateComment = () => {
        if (!comment.trim()) {
            setError("Yorum kısmı zorunludur");
            return false;
        }
        setError("");
        return true;
    };

    const clickHandler = () => {
        if (validateComment()) {
            createModal("rate", {data, comment});
        }
    };

    return (
        <div className="p-5 w-[500px] h-auto bg-white rounded-md">
            <header className="flex justify-between items-center">
                <div></div>
                <h3 className="text-xl font-medium">Aldığın hizmet için yorum bırak</h3>
                <IoClose
                    onClick={destroyAllModal}
                    className="text-3xl cursor-pointer hover:text-gray-600"
                />
            </header>

            <div className="flex flex-col gap-y-4 pt-5">
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    required={true}
                    rows="12"
                    placeholder="Aldığınız hizmet için bir yorum yapın."
                    className="rounded-md p-3 text-sm font-medium outline-none border border-zinc-300 focus:border-zinc-500"
                />

                {error && <span className="text-red-600 font-medium text-sm">{error}</span>}

                <div className="grid">
                    <Button onClick={clickHandler} as="button" variant="filled-button" size="x-large">
                        Yorum Yap
                    </Button>
                </div>
            </div>
        </div>
    );
}
